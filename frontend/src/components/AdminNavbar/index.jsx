import { Nav } from "react-bootstrap";
import { House, Person, Gear, List } from "react-bootstrap-icons";
import './index.css';
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <Nav className="flex-column p-3">
      <Nav.Link href="/admin" className="text-white">
        <House className="me-2" /> Dashboard
      </Nav.Link>
      <Nav.Link href="/admin/profile" className="text-white">
        <Person className="me-2" /> Profile
      </Nav.Link>
      <Nav.Link as={Link} to="/admin/categories" className="text-white">
        <List className="me-2" /> Categories
      </Nav.Link>
      <Nav.Link as={Link} to="/admin/products" className="text-white">
        <Gear className="me-2" /> Products
      </Nav.Link>
      <Nav.Link href="/admin/users" className="text-white">
        <Person className="me-2" /> Users
      </Nav.Link>
    </Nav>
  );
};

export default AdminNavbar;