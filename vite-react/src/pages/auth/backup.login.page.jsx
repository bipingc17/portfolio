import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
    let [credentials, setCredentials] = useState({
        email: null,
        password: null
    });
    let [errors, setErrors] = useState({
        email: null,
        password: null
    });

    const handleChange = (e) => {
        let {name, value} = e.target;
        validateData(name, value);
        
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        Object.keys(credentials).map(async (item) => {
            await validateData(item, credentials[item])
        })
        
    }

    const validateData = async (field, data) => {
        let msg = "";
        switch(field){
            case "email":
                msg = data ? "" : "Email is required";
                break;
            case "password":
                msg = data ? "" : "Password is required";
                break;
        }
        setErrors({
            ...errors, 
            [field]: msg
        })
    }
    return (<>
        <Container className="my-5">
            <Row>
                <Col sm={12} md={{offset:3, span:6}}>
                    <h1 className="text-center">Login Page</h1>
                    <hr />
                </Col>
            </Row>

            <Row>
                <Col sm={12}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="row mb-3">
                            <Form.Label className="col-sm-3">Email: </Form.Label>
                            <Col sm={9}>
                                <Form.Control 
                                    onChange={handleChange}
                                    defaultValue={credentials?.email}
                                    type="email"
                                    
                                    name="email"
                                    placeholder="Enter your username..."
                                    size="sm"
                                />
                                <span className="text-danger">
                                    { errors?.email }
                                </span>
                            </Col>
                        </Form.Group>
                        <Form.Group className="row mb-3">
                            <Form.Label className="col-sm-3">Password: </Form.Label>
                            <Col sm={9}>
                                <Form.Control 
                                    type="password"
                                    
                                    onChange={handleChange}
                                    name="password"
                                    placeholder="Enter your Password..."
                                    size="sm"
                                />
                                <span className="text-danger">{errors?.password}</span>
                            </Col>
                        </Form.Group>
                        <Form.Group className="row mb-3">
                            <Col sm={{offset:3, span:9}}>
                                <Button variant="danger" type="reset" size="sm" className="me-3">
                                    <i className="fa fa-trash"></i> Cancel
                                </Button>
                                <Button variant="success" type="submit" size="sm">
                                    <i className="fa fa-paper-plane"></i> Login
                                </Button>
                            </Col>
                        </Form.Group>
                        <Form.Group className="row mb-3">
                            <Col sm={12}>
                                <NavLink to="/register"> Or Sign Up</NavLink>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    </>)
}

export default LoginPage;