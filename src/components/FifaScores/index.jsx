import { useEffect, useState } from "react";

const API_HOST = "free-api-live-football-data.p.rapidapi.com";
const API_KEY =
  import.meta.env.VITE_RAPIDAPI_KEY ??
  "51a8c9e6b5mshdcc5256b081a284p1cc619jsnf28864359285";

const CACHE_KEY = "fifa-scores-cache";
const CACHE_TTL_MS = 5 * 60 * 1000;
const POLL_INTERVAL_MS = 5 * 60 * 1000;

const headers = {
  "x-rapidapi-key": API_KEY,
  "x-rapidapi-host": API_HOST,
};

const cardClassName =
  "inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 backdrop-blur-sm text-sm min-h-[34px]";

let inFlightRequest = null;

function readCache(allowStale = false) {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!allowStale && Date.now() - parsed.timestamp > CACHE_TTL_MS) return null;
    return parsed.data;
  } catch {
    return null;
  }
}

function writeCache(data) {
  try {
    sessionStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ timestamp: Date.now(), data }),
    );
  } catch {
    // ignore quota errors
  }
}

function pickLiveMatch(data) {
  const live = data?.response?.live;
  if (!Array.isArray(live) || live.length === 0) return null;
  return live.find((m) => m?.status?.liveTime?.short) ?? live[0];
}

async function fetchLiveMatch() {
  const cached = readCache();
  if (cached) return cached;

  if (inFlightRequest) return inFlightRequest;

  inFlightRequest = (async () => {
    const res = await fetch(
      `https://${API_HOST}/football-current-live`,
      { headers },
    );

    if (res.status === 429) {
      const stale = readCache(true);
      if (stale?.match) return stale;
      return { status: "rate_limited", match: null, mode: "live" };
    }

    if (!res.ok) {
      return { status: "error", match: null, mode: "live" };
    }

    const data = await res.json();
    const match = pickLiveMatch(data);

    const result = match
      ? { status: "ready", match, mode: "live" }
      : { status: "empty", match: null, mode: "live" };

    writeCache(result);
    return result;
  })();

  try {
    return await inFlightRequest;
  } finally {
    inFlightRequest = null;
  }
}

export default function FifaScores() {
  const cached = readCache();
  const [status, setStatus] = useState(cached?.status ?? "loading");
  const [match, setMatch] = useState(cached?.match ?? null);
  const [mode, setMode] = useState(cached?.mode ?? "live");

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      const result = await fetchLiveMatch();
      if (cancelled) return;

      setStatus(result.status);
      setMatch(result.match);
      setMode(result.mode);
    };

    load();
    const interval = setInterval(load, POLL_INTERVAL_MS);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  if (status === "loading") {
    return (
      <div className={cardClassName}>
        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-white/20 animate-pulse" />
        <span className="text-xs text-slate-500 dark:text-white/40 font-medium">
          Cargando marcador…
        </span>
      </div>
    );
  }

  if (status === "rate_limited") {
    return (
      <div className={cardClassName}>
        <span className="text-xs text-slate-500 dark:text-white/50 font-medium">
          Marcador en pausa (límite API)
        </span>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className={cardClassName}>
        <span className="text-xs text-slate-500 dark:text-white/50 font-medium">
          Marcador no disponible
        </span>
      </div>
    );
  }

  if (status === "empty" || !match) {
    return (
      <div className={cardClassName}>
        <span className="text-xs text-slate-500 dark:text-white/50 font-medium">
          Sin partidos en vivo ahora
        </span>
      </div>
    );
  }

  const home = match.home?.shortName ?? match.home?.name ?? "—";
  const away = match.away?.shortName ?? match.away?.name ?? "—";
  const score = match.status?.scoreStr ?? "0 - 0";
  const minute = match.status?.liveTime?.short;
  const isLive = mode === "live";

  return (
    <div className={cardClassName}>
      <span className="flex items-center gap-1.5">
        {isLive ? (
          <>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
            <span className="text-cyan-600 dark:text-cyan-400 font-mono text-[10px] font-semibold tracking-widest uppercase">
              Live
            </span>
          </>
        ) : (
          <span className="text-slate-500 dark:text-white/40 font-mono text-[10px] font-semibold tracking-widest uppercase">
            Hoy
          </span>
        )}
      </span>

      <span className="w-px h-3 bg-slate-300 dark:bg-white/10" />

      <span className="flex items-center gap-2 text-slate-700 dark:text-white/80 font-medium text-xs">
        <span>{home}</span>
        <span className="font-mono font-bold text-slate-900 dark:text-white text-sm tracking-tight">
          {score}
        </span>
        <span>{away}</span>
      </span>

      {minute && (
        <>
          <span className="w-px h-3 bg-slate-300 dark:bg-white/10" />
          <span className="font-mono text-[10px] text-slate-500 dark:text-white/40">
            {minute}′
          </span>
        </>
      )}
    </div>
  );
}
