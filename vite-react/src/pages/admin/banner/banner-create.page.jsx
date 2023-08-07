import { Container, Card, Breadcrumb, Row, Col, Form, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import {FaArrowLeft,FaEdit, FaPaperPlane, FaRedo} from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup"
import { TextInput } from "../../../components/form.components";
import banner from ".";
import { toast } from "react-toastify";

const BannerCreateForm = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        title: Yup.string().required(),
        link: Yup.string().url().nullable(),
        startDate: Yup.date().required(),
        endDate: Yup.date().min(Yup.ref('startDate')).required(),
        status: Yup.string().matches(/active|inactive/).required(),
        image: Yup.string().required(),
    })
    let formik = useFormik({
        initialValues: {
            title: "",
            link: "", 
            startDate: "", 
            endDate: "", 
            status: "", 
            image: {}
        },
        validationSchema: validationSchema, 
        onSubmit:async (values) => {
            try{
                // submit
                const response = await banner.bannerSvc.createBanner(values)
                toast.success(response.msg)
                navigate('/admin/banner')
            } catch(error) {
                // TODO: Debug for error 
                toast.error("Cannot create banner. Retry again after reloading the page...")
            }
        }
    })
    return (<>
        <Container fluid className="px-4">
            <Row>
                <Col sm={12} md={6}>
                    <h1 className="mt-4">Banner Create Page</h1>
                </Col> 
                <Col md={6} sm={12} className="d-none d-md-block">
                    <NavLink className={"btn btn-sm btn-success mt-5 float-end"} to ="/admin/banner">
                        <FaArrowLeft/>    Go To List
                    </NavLink>
                </Col>
            </Row>
            <Breadcrumb className="mb-4">
                <Breadcrumb.Item>
                    <NavLink to="/admin">Dashboard</NavLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <NavLink to="/admin/banner">Banner Listing</NavLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Banner Create</Breadcrumb.Item>
            </Breadcrumb>

            <Card className="mb-4">
                <Card.Body>
                    <Form onSubmit={formik.handleSubmit}> 
                        <TextInput 
                            label="Name"
                            name="title"
                            changeEvent={formik.handleChange}
                            placeholder="Enter title..."
                            error={formik.errors?.title}
                            
                        />
                        
                        <TextInput 
                            label="URL(For Redirection):"
                            type="url"
                            name="link"
                            changeEvent={formik.handleChange}
                            placeholder="Enter URL..."
                            error={formik.errors?.link}
                        />

                        <Form.Group className="row mb-3">
                            <Form.Label className="col-sm-3">Date(Start-End): </Form.Label>
                            <Col sm={9}>
                                <Row>
                                    <Col sm={6}>
                                        <Form.Control 
                                            type="date"
                                            name="startDate"
                                            onChange={formik.handleChange}
                                            value={formik.values?.startDate}
                                            placeholder="Start Date"
                                            size="sm"
                                        />
                                        <span className="text-danger">{formik.errors?.startDate}</span>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Control 
                                            type="date"
                                            name="endDate"
                                            onChange={formik.handleChange}
                                            value={formik.values?.endDate}
                                            size="sm"
                                            
                                        />
                                        <span className="text-danger">{formik.errors?.endDate}</span>
                                    </Col>
                                </Row>
                            </Col>
                        </Form.Group>

                        <Form.Group className="row mb-3">
                            <Form.Label className="col-sm-3">Status: </Form.Label>
                            <Col sm={9}>
                                <Form.Select
                                    name="status"
                                    value={formik.values?.status}
                                    required
                                    onChange={formik.handleChange}
                                    size="sm"
                                >
                                    <option>-- Select Any one --</option>
                                    <option value={'active'}>Publish</option>
                                    <option value={"inactive"}>Un-Publish</option>

                                </Form.Select>
                                <span className="text-danger">{formik.errors?.status}</span>
                            </Col>
                        </Form.Group>

                        <Form.Group className="row mb-3">
                            <Form.Label className="col-sm-3">Image: </Form.Label>
                            <Col sm={9}>
                                <Form.Control 
                                    type="file"
                                    size="sm"
                                    name="image"
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
                                    accept="image/*"
                                />
                                <span className="text-danger">
                                    {formik.errors?.image}
                                </span>
                            </Col>
                        </Form.Group>

                        <Form.Group className="row mb-3">
                            <Col sm={{offset: 3, span: 9}}>
                                <Button variant="success" className="me-3" type="submit" size="sm">
                                    <FaPaperPlane /> Submit
                                </Button>
                                <Button variant="danger" type="reset" size="sm">
                                    <FaRedo /> Cancel
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    </>)
}

export default BannerCreateForm;