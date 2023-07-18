import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { EmailInput } from "../../components/form.components";
import { toast } from "react-toastify";
import axios from "axios";
import axiosInstance from "../../config/axios.config";
import AuthService from "./auth.service";


const LoginPage = () => {
    const authSvc = new AuthService();
    const loginSchema = Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().min(8).required(),
        // configmPassword: Yup.string().oneOf(Yup.ref('password'))
    });

    const navigate = useNavigate();
    // loginSchema.validate(formik.values)
    const formik = useFormik({
        initialValues: {
        email: null,
        password: null,
        },
        validationSchema: loginSchema,
        onSubmit: async (values) => {
            try{
                let response = await authSvc.login(values);

                console.log(response)
            } catch(axiosErrorResponse){
              toast.error(axiosErrorResponse.data.msg)
              console.log(axiosErrorResponse)
            }
        },
    });
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col sm={12} md={{ offset: 3, span: 6 }}>
            <h1 className="text-center">Login Page</h1>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Form onSubmit={formik.handleSubmit}>
              <EmailInput name="email" changeEvent={formik.handleChange} />

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
                  <span className="text-danger">{formik.errors?.password}</span>
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
                <Col sm={{ offset: 3, span: 9 }}>
                  <Button
                    variant="danger"
                    type="reset"
                    size="sm"
                    className="me-3"
                  >
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
      
    </>
  );
};

export default LoginPage;
