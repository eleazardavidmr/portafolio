import useComments from "@hooks/useComments";
import CreateCommentInput from "@pages/BlogPage/CommentSection/CreateCommentInput";
import Comment from "@pages/BlogPage/CommentSection/Comment";

export default function CommentSection({ postId }) {
  const { postComments } = useComments(postId);

  return (
    <section className="pt-10 ">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black flex items-center gap-3">
          Comunidad
          <span className="px-3 py-1 text-sm font-bold bg-primary/10 text-primary rounded-full">
            {postComments?.length || 0}
          </span>
        </h2>
      </div>

      <CreateCommentInput postId={postId} />

      <div className="space-y-8 mt-12 pb-10">
        {postComments?.length > 0 ? (
          postComments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))
        ) : (
          <div className="text-center py-12 px-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-dashed border-slate-300 dark:border-white/10">
            <p className="text-slate-500 dark:text-slate-400 italic">
              Aún no hay comentarios. ¡Sé el primero en compartir tu opinión!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
