import { Table, Container, Row, Col, Button } from "react-bootstrap";
import AdminNavbar from "../../../components/AdminNavbar";
import { useCategoryContext } from "../../../context/CategoryContext";
import { useState } from "react";
import CreateCategory from "./CreateCategory";
import EditCategory from "./EditCategory";
import { deleteCategory } from "../../../Services/categoryService";

const AdminCategories = () => {

    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(false);
    const [editCategory, setEditCategory] = useState("");
    const { categories, getCategories } = useCategoryContext();

    const handleCreate = () =>{
        setCreate(!create);
    }

    const handleEdit = ()=>{
      setEdit(!edit);
    }

    const handleDelete = async(id) =>{
        try{
          await deleteCategory(id);
          getCategories();
        } catch (error){
          
        }
    }

    console.log(editCategory);
  
  return (
    <Container fluid className="p-0">
      <Row className="mb-3 p-3 bg-light shadow-sm align-items-center">
        <Col md={3}></Col>
        <Col>
          <h3>Categories</h3>
        </Col>
        <Col className="text-end">
          <Button variant="primary" onClick={handleCreate}>
            + Create New Category
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

        {/* Main content */}
        <Col md={9} className="p-3 offset-md-3">
          <Table striped bordered hover responsive className="shadow-sm">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
               {categories.length > 0 ? (
                categories.map((category, index) => (
                  <tr key={index}>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    <td>{category.description}</td>
                    <td>
                      <Button variant="primary"  onClick={() => {
                      setEditCategory(category);
                      setEdit(true);
                    }}>Edit</Button>
                    </td>
                    <td>
                        <Button variant="danger" onClick={()=>handleDelete(category.id)}>Delete</Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center">
                    No categories found
                  </td>
                </tr>
              )}
              
            </tbody>
          </Table>
          {create && <CreateCategory open={create} close={handleCreate} onSuccess={getCategories}/>}
          {edit && <EditCategory open={edit} close={handleEdit} category={editCategory} onSuccess={getCategories}/>}
        </Col>
      </Row>

    </Container>
  );
};

export default AdminCategories;