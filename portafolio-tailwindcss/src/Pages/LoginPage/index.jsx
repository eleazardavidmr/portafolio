import { useState } from "react";
import Layout from "@/components/Layout";
import { FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import toast from "react-hot-toast";
import { client, handleGoogleLogin } from "@/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // Función unificada para Email (Magic Link)
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.trim()) return toast.error("Email is required.");
    setLoading(true);
    try {
      const { error } = await client.auth.signInWithOtp({ email });

      if (error) {
        console.error("Error de Supabase:", error.message);
        toast.error(`Error: ${error.message}`);
        return;
      }

      toast.success("¡Código enviado! Revisa tu correo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="glass-card rounded-2xl p-8 cyan-glow animate-in fade-in zoom-in duration-500">
            <div className="text-center mb-8">
              <span className="text-[10px] font-display font-bold tracking-[0.2em] text-primary uppercase">
                Portal de Acceso
              </span>
              <h1 className="text-2xl font-bold mt-2 text-slate-900 dark:text-white">
                Identifícate
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                Entra al blog
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label
                  className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2"
                  htmlFor="email"
                >
                  Dirección de Email
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                    <MdEmail />
                  </span>
                  <input
                    className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <button
                disabled={loading}
                className="w-full bg-primary hover:bg-cyan-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 transform active:scale-[0.98] disabled:opacity-50"
                type="submit"
              >
                {loading ? "Enviando..." : "Continuar con Email"}
                <IoIosArrowForward className="text-sm" />
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#0a0f18] px-3 text-slate-500 font-medium">
                  O usa tu cuenta
                </span>
              </div>
            </div>

            <button
              onClick={handleGoogleLogin}
              className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-3 hover:opacity-90 active:scale-[0.98]"
            >
              <FaGoogle />
              Continuar con Google
            </button>

            <p className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400 italic">
              Si no tienes cuenta, se creará una automáticamente.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
