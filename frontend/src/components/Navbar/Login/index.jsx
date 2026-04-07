import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useAuthContext } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = ({ show, close }) => {
    const [value, setValue] = useState({ name: "", lastname: "", email: "", password: "", confirmPassword: "" });
    const [isLogin, setIsLogin] = useState(true);
    const { login, register } = useAuthContext();
    const navigate = useNavigate();
    const handleIsLogin = () => setIsLogin(!isLogin);

    const handleChange = (event) => {
        const { value: val, name } = event.target;
        setValue((prev) => ({ ...prev, [name]: val }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (isLogin) {
    const result = await login(value.email, value.password);
    if (!result) {
        alert("Invalid email or password. Please try again.");
        return;
    }
    
    if (result.role === "admin") {
        navigate("/admin");
    } else {
        navigate("/");
    }
    console.log('Login success:', result);
}
 else {
                if (value.password !== value.confirmPassword) {
                    alert("Passwords do not match");
                    return;
                }
                const result = await register(value.name, value.lastname, value.email, value.password);
                console.log('Register success:', result);
            }
            close(); // close modal on success
        } catch (error) {
            console.error('Submission failed:', error);
        }
    };

    return (
        <Modal show={show} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>{isLogin ? 'Login' : 'Sign Up'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <>
                            <Form.Group className="mb-3" controlId="fullname">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter first name"
                                    name="name"
                                    value={value.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="lastname">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter last name"
                                    name="lastname"
                                    value={value.lastname}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </>
                    )}
                    <Form.Group className="mb-3" controlId="loginEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={value.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="loginPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={value.password}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    {!isLogin && (
                        <Form.Group className="mb-3" controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm password"
                                name="confirmPassword"
                                value={value.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    )}
                    <Button variant="primary" type="submit">
                        {isLogin ? 'Login' : 'Sign Up'}
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                {isLogin ? (
                    <small>
                        Don't have an account?{' '}
                        <span onClick={handleIsLogin} style={{ cursor: 'pointer', color: 'blue' }}>
                            Sign Up
                        </span>
                    </small>
                ) : (
                    <small>
                        Already have an account?{' '}
                        <span onClick={handleIsLogin} style={{ cursor: 'pointer', color: 'blue' }}>
                            Log In
                        </span>
                    </small>
                )}
            </Modal.Footer>
        </Modal>
    );
};

export default Login;