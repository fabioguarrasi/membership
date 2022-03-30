import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
  return (
    <nav>
      <Link to="/">Homepage</Link>
      <Link to="/page-2">Page 2</Link>
      <Link to="/page-3">Page 3</Link>
    </nav>
  );
}

export default Navbar;