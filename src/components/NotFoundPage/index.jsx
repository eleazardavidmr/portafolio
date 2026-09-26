import { Link } from "react-router-dom";
import Layout from "@components/Layout";
import SEO from "@components/SEO";

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO
        title="Página no encontrada"
        description="La página que buscas no existe."
        robots="noindex, follow"
      />
      <section className="mx-auto flex min-h-[55vh] max-w-content flex-col items-center justify-center px-6 text-center">
        <p className="text-eyebrow text-primary">Error 404</p>
        <h1 className="text-headline mt-4">Esta página no existe.</h1>
        <p className="text-lead mt-4 max-w-md text-label-2">
          Puede que el enlace esté roto o que la página se haya movido.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">
            Volver al inicio
          </Link>
          <Link to="/proyectos" className="btn-secondary">
            Ver proyectos
          </Link>
        </div>
      </section>
    </Layout>
  );
}
