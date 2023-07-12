import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {FaStar} from "react-icons/fa"
import { useFormik } from "formik";
import * as Yup from "yup"

const LoginPage = () => {
    const loginSchema = Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().min(8).required(),
    })

    // loginSchema.validate(formik.values)
    const formik = useFormik({
        initialValues: {
            email: null, 
            password: null
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            // TODO: API Call for the submission
            console.log(values)
        }
    })
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
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group className="row mb-3">
                            <Form.Label className="col-sm-3">Email: </Form.Label>
                            <Col sm={9}>
                                <Form.Control 
                                    type="email"
                                    onChange={formik.handleChange}
                                    name="email"
                                    placeholder="Enter your username..."
                                    size="sm"
                                />
                                <span className="text-danger">
                                    {formik.errors?.email}
                                </span>
                            </Col>
                        </Form.Group>
                        <Form.Group className="row mb-3">
                            <Form.Label className="col-sm-3">Password: </Form.Label>
                            <Col sm={9}>
                                <Form.Control 
                                    type="password"
                                    name="password"
                                    onChange={formik.handleChange}
                                    placeholder="Enter your Password..."
                                    size="sm"
                                />
                                <span className="text-danger">
                                    {formik.errors?.password}
                                </span>
                            </Col>
                        </Form.Group>

                        {/* <Form.Check 
                            value={1}
                            onChange={(e) => {
                                let {checked} = e.target;
                                if(checked){
                                    formik.setValues({
                                        ...formik.values,
                                        rememberme: true
                                    })
                                }
                            }}
                        /> */}
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