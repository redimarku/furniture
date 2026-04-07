import { useState } from "react";
import { Button, Form, Modal, Alert } from "react-bootstrap";
import { updateCategory } from "../../../../Services/categoryService";

const EditCategory = ({ category, close, onSuccess }) => {
  const [value, setValue] = useState({
    name: category.name,
    description: category.description,
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateCategory(category.id, value);
      setSuccess(true);
      setTimeout(() => {
        close();
        if (onSuccess) onSuccess();
      }, 1500);
    } catch (err) {
      setError("Failed to update category. Please try again.");
    }
  };

  return (
    <Modal show={true} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {success && (
          <Alert variant="success">Category updated successfully!</Alert>
        )}
        {error && (
          <Alert variant="danger">{error}</Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={value.name}
              onChange={handleChange}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={value.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit" variant="primary" disabled={success}>
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditCategory;