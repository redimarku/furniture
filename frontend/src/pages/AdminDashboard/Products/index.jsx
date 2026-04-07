import { Button, Col, Container, Row } from "react-bootstrap";
import AdminNavbar from "../../../components/AdminNavbar";


const AdminProducts = () =>{
    return(
        <>
         <Container fluid className="p-0">
      <Row className="mb-3 p-3 bg-light shadow-sm align-items-center">
        <Col md={3}></Col>
        <Col>
          <h3>Products</h3>
        </Col>
        <Col className="text-end">
          <Button variant="primary" >
            + Create New Product
          </Button>
        </Col>
      </Row>

      <Row>
        {/* Sidebar */}
        <Col md={3} className="d-none d-md-block p-0">
          <div className="sidebar">
            <AdminNavbar />
          </div>
        </Col>

      </Row>

    </Container>
        </>
    )
}

export default AdminProducts;