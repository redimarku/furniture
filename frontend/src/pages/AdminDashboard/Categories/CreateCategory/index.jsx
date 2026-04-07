import { useState } from "react";
import { Button, Form, Modal, Alert } from "react-bootstrap";
import { createCategory } from "../../../../Services/categoryService";

const CreateCategory = ({ close, onSuccess }) => {
  const [value, setValue] = useState({ name: "", description: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await createCategory(value);
      setSuccess(true);
      setTimeout(() => {
        close();                  // closes the modal after 1.5s
        if (onSuccess) onSuccess(); // optional: refresh parent list
      }, 1500);
      return result;
    } catch (err) {
      setError("Failed to create category. Please try again.");
    }
  };

  return (
    <Modal show={true} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Create Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {success && (
          <Alert variant="success">Category created successfully!</Alert>
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
          <Button type="submit" disabled={success}>Create</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateCategory;