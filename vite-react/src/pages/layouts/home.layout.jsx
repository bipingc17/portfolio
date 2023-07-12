import {  Outlet } from "react-router-dom"
import HomeHeader from "../home/component/header.component"
import { Container, Row, Col } from "react-bootstrap"
const HomePageLayout = () => {
    return (<>
        <HomeHeader />

            <Outlet />


        <footer></footer>
    </>)
}

export default HomePageLayout