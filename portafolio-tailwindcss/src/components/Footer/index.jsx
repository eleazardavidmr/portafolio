export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="text-primary font-bold text-lg font-mono">
            &lt;EDMR /&gt;
          </div>
          <div className="text-slate-400 text-sm">
            © 2026 Eleazar Muñoz. Hecho con React y Vercel.
          </div>
        </div>
      </div>
    </footer>
  );
}
