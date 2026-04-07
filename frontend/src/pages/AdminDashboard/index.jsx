import { Table, Button, Nav } from "react-bootstrap";
import { useUserContext } from "../../context/UserContext";

import "./index.css";
import AdminNavbar from "../../components/AdminNavbar";

const AdminDashboard = () => {
  const { users } = useUserContext();

  return (
    <>
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h5>App</h5>
        </div>

       <AdminNavbar />
      </div>

      {/* Main Content */}
      <div className="content">
        <h2>Users</h2>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      style={{ marginRight: "8px" }}
                    >
                      Edit
                    </Button>

                    <Button variant="danger" size="sm">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default AdminDashboard;