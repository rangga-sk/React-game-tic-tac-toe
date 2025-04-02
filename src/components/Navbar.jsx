import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-blue-500 text-white">
      <h1 className="text-xl font-bold">My Blog</h1>
      <Link to="/" className="ml-4">Home</Link>
    </nav>
  );
};

export default Navbar;