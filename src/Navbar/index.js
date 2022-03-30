import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
  return (
    <nav>
      <Link to="/">Homepage</Link>
      <Link to="/bookings">Bookings</Link>
      <Link to="/membership">Membership</Link>
    </nav>
  );
}

export default Navbar;