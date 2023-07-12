import { Outlet, useParams } from "react-router-dom"
import { Row, Image } from "react-bootstrap";
import bgimage from "../../assets/images/header-bg.jpeg"


const CategoryDetail = () => {
    // params   ==> route /param
    // query    ==> ?key=value&key1=value => query
    let params = useParams();

    // useSearchParams()

    return (<>
        
        <div className="header-wrapper">
            <Row>
                <Image src={bgimage} alt="" fluid />
            </Row>
        </div>
        <Outlet />
        TODO: Category Detail Page of {params.slug}, {params.childSlug}
    </>)
}

export default CategoryDetail