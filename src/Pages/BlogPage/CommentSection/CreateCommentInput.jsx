import useComments from "@/hooks/useComments";
import useProfile from "@/hooks/useProfile";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function CreateCommentInput({ postId }) {
  const [content, setContent] = useState("");
  const { profile } = useProfile();
  const { publishComment } = useComments(postId);

  const handlePublish = async () => {
    if (!content.trim()) return;
    await publishComment(profile.id, content);
    setContent("");
  };

  return (
    <div className="mb-14 p-6 rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-slate-200/60 dark:border-white/10 shadow-sm relative overflow-hidden group">
      {/* Subtle light effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -z-10 group-focus-within:bg-primary/10 transition-colors"></div>

      <div className="flex gap-4">
        <div className="hidden sm:block">
          <img
            src={profile?.avatar_url}
            alt="Avatar"
            className="w-12 h-12 rounded-xl border-2 border-white dark:border-white/10 shadow-sm object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-4 bg-primary rounded-full"></span>
              Deja un comentario
            </h3>
            {profile && (
              <span className="text-[10px] sm:text-xs font-bold text-primary/80 bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20 backdrop-blur-sm">
                Conectado como {profile.username}
              </span>
            )}
          </div>

          <textarea
            className="w-full bg-white/50 dark:bg-black/20 border border-slate-200 dark:border-white/5 rounded-xl p-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 outline-none transition-all min-h-[120px] resize-y shadow-inner"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Comparte tus pensamientos..."
          ></textarea>

          <div className="mt-4 flex justify-end">
            <button
              onClick={handlePublish}
              disabled={!content.trim()}
              className="group/btn relative px-8 py-2.5 bg-primary text-white font-black rounded-xl hover:shadow-[0_0_20px_rgba(38,172,208,0.4)] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none overflow-hidden"
            >
              <span className="relative z-10">Publicar</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
