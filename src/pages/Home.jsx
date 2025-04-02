import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "Belajar React dari Nol", content: "React adalah library..." },
  { id: 2, title: "Apa Itu JSX?", content: "JSX adalah..." }
];

const Home = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Daftar Artikel</h2>
      {posts.map((post) => (
        <div key={post.id} className="mb-4 p-4 border rounded">
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p>{post.content.substring(0, 50)}...</p>
          <Link to={`/post/${post.id}`} className="text-blue-500">Baca Selengkapnya</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
