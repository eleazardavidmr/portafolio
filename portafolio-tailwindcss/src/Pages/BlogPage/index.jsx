import usePosts from "@/hooks/usePosts";
import { useEffect } from "react";
import PostCard from "./PostCard";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";

export default function BlogPage() {
  const { loadPosts, posts } = usePosts();
  useEffect(() => {
    loadPosts();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <>
      <SEO
        title="Blog & Recursos"
        description="Explora artículos sobre desarrollo frontend, tutoriales de React, y recursos para desarrolladores. Aprende y mejora tus habilidades de programación."
        keywords="blog programacion, desarrollo web, frontend, react, javascript, tutoriales"
      />
      <div className="max-w-4xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h4 className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
            Pensamientos y Código
          </h4>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 dark:text-white">
            Blog &amp; <span className="text-primary">Recursos</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg leading-relaxed">
            Comparto mis experiencias en el desarrollo frontend, soluciones a
            problemas comunes y fragmentos de código listos para usar en tus
            proyectos.
          </p>
        </motion.header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {posts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <PostCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
