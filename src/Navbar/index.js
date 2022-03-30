import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
  return (
    <nav>
      <Link to="/v2/">Homepage</Link>
      <Link to="/v2/page-2">Page 2</Link>
      <Link to="/v2/page-3">Page 3</Link>
    </nav>
  );
}

export default Navbar;