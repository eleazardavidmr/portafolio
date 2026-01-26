import { useParams } from "react-router-dom";
import usePosts from "@/hooks/usePosts";
import Post from "@pages/BlogPage/Post";
import { useEffect, useState } from "react";
import SEO from "@/components/SEO";
import Layout from "@components/Layout";
import Loader from "@/components/Loader";

export default function PostPage() {
  const { slug } = useParams();
  const { posts, loadPosts, loading } = usePosts();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (posts.length === 0) {
      loadPosts();
    }
  }, [posts.length, loadPosts]);

  useEffect(() => {
    if (posts.length > 0 && slug) {
      const foundPost = posts.find((p) => p.slug === slug);
      setPost(foundPost || null);
    }
  }, [posts, slug]);

  if (loading) {
    return <Loader fullScreen />;
  }

  if (!post) {
    return (
      <Layout>
        <SEO
          title="Post Not Found"
          description="The requested blog post could not be found."
        />
        <div className="flex flex-col justify-center items-center min-h-[50vh] text-center px-4">
          <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-white">
            Post Not Found
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            The article you are looking for does not exist or has been removed.
          </p>
          <a href="/blog" className="text-primary hover:underline">
            Back to Blog
          </a>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.summary || `Read ${post.title} on Edmr Portfolio`}
        keywords={post.tags ? post.tags.join(", ") : ""}
        // image={post.cover_image} // Uncomment if cover image is available in post object
      />
      <Post postInfo={post} />
    </Layout>
  );
}
