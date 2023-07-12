import { NavLink } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
const ErrorPage = () => {
    return (<>
        
            <Container className="my-5">
                <Row className="my-5">
                    <Col>
                        <p className="text-danger">404 Not found!!!</p>
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col>
                        <p>
                            Click <NavLink to="/">Home</NavLink> to go back to homepage
                        </p>
                    </Col>
                </Row>
            </Container>
    </>)
}

export default ErrorPage