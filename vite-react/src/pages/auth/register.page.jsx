import { Button, Col, Container, Form, Row } from "react-bootstrap";
import noimage from "../../assets/images/no-user.png";
import { FaPaperPlane, FaTrash } from "react-icons/fa";
import { useFormik } from "formik";
import { EmailInput, TextInput } from "../../components/form.components";
import * as Yup from "yup"
import axios from "axios";
const RegisterPage = () => {
    const registerSchema = Yup.object({
        name: Yup.string().min(3).required("Name is required"),
        email: Yup.string().email().required(), 
        role: Yup.string().matches(/seller|customer/).default("customer"),
        password: Yup.string().min(8).max(30).required(), 
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Password and confirm Password does not match"), 
        image: Yup.string()
    })
    const formik = useFormik({
        initialValues: {
            name: null,
            email: null, 
            role: null, 
            password: null, 
            confirmPassword: null, 
            image: null
        },
        validationSchema: registerSchema,
        onSubmit: (values) => {
            
            console.log("Registraion: " , values)
            // let formData = new FormData()
            // // data bind 
            // // object 
            // formData.append('image', values.image, values.image.name)
            // formData.append('name', values.name)
            // formData.append('role', values.role)
            // formData.append('email', values.email)
            // formData.append('password', values.password)
            
            console.log(formData)
            // send => formData
        }
    })
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col sm={12}>
            <h1 className="text-center">Registration Page</h1>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm={12}>
            <Form onSubmit={formik.handleSubmit}>
              
              <TextInput 
                name='name'
                changeEvent={formik.handleChange}
                error={formik.errors?.name}
              />
              
                <EmailInput 
                  name="email"
                  changeEvent={formik.handleChange}
                  label="Email(Username)"
                  error={formik.errors?.email}
                />
              
              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3">Password: </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    required
                    size="sm"
                    placeholder="Enter your Password..."
                  />
                  <span className="text-danger">{formik.errors?.password}</span>
                </Col>
                
              </Form.Group>

              <Row>
                <Col sm={12} md={10}>
                  <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-4">
                      Confirm Password:{" "}
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="password"
                        name="confirmPassword"
                        onChange={formik.handleChange}
                        required
                        size="sm"
                        placeholder="Re-type your password..."
                      />
                      <span className="text-danger">{formik.errors?.confirmPassword}</span>
                    </Col>
                    
                  </Form.Group>

                  <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-4">Role: </Form.Label>
                    <Col sm={8}>
                      <Form.Select 
                        name="role" 
                        size="sm" 
                        required
                        onChange={formik.handleChange}
                    >
                        <option>-- Select Any One --</option>
                        <option value={"seller"}>Seller</option>
                        <option value={"customer"}>Customer</option>
                      </Form.Select>
                      <span className="text-danger">{formik.errors?.role}</span>
                    </Col>
                  </Form.Group>

                  <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-4">
                      Profile Image:{" "}
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="file"
                        name="image"
                        required
                        accept="image/*"
                        size="sm"
                        onChange={(e) => {
                            let file = e.target.files[0];
                            let ext = (file.name.split(".")).pop();

                            if(['jpg','jpeg','png','gif','bmp','webp','svg'].includes(ext.toLowerCase())){
                                formik.setValues({
                                    ...formik.values,
                                    image: file
                                })    
                            } else {
                                formik.setErrors({
                                    ...formik.errors,
                                    image: "File format not supported"
                                })
                            }

                        }}
                      />
                      <span className="text-danger">{formik.errors?.image}</span>
                    </Col>
                  </Form.Group>
                </Col>
                <Col sm={12} md={2}>
                    <img src={
                        (formik.values.image && typeof formik.values.image !== "string") 
                            ? URL.createObjectURL(formik.values.image)
                            : noimage
                    } alt="" className="img img-fluid" />
                </Col>
              </Row>

                <Row>
                    <Col sm={{offset: 3, span: 9}}>
                        <Button variant="danger" type="reset" className="me-3" size="sm">
                            <FaTrash /> Cancel
                        </Button>
                        <Button variant="success" type="submit" className="me-3" size="sm">
                            <FaPaperPlane /> Register
                        </Button>
                    </Col>
                </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RegisterPage;
