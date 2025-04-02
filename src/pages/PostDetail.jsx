import { useParams } from "react-router-dom";

const posts = [
  { id: 1, title: "Belajar React dari Nol", content: "React adalah library untuk membangun UI..." },
  { id: 2, title: "Apa Itu JSX?", content: "JSX adalah sintaks yang digunakan di React..." }
];

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <h2>Artikel tidak ditemukan!</h2>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;
