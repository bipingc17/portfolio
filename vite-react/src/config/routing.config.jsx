import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import HomePage from "../pages/home";
import ErrorPage from "../pages/errors/404.page";
import CategoryDetail from "../pages/category/detail.page";
import HomePageLayout from "../pages/layouts/home.layout";
import AdminLayout from "../pages/layouts/admin.layout";
import AdminDashboard from "../pages/admin/dasboard.page";

import ActivateUser from "../pages/auth/activate-user.page";
import LoginPage from "../pages/auth/login.page";
import RegisterPage from "../pages/auth/register.page";
import CheckPermission from "./rbac.config";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


import Banner from "../pages/admin/banner";

const Routing = () => {
    // url http://localhost:5173/category/sub-category/sub-cat-2 => 2048
    
    return (<>
        <ToastContainer />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePageLayout />}>
                    <Route index element={<HomePage />}></Route>

                    <Route path="category/:slug" element={<CategoryDetail />} >

                        <Route index element={<>hello</>} />
                    
                    </Route>
                    <Route path="category/:slug/:childSlug" element={<CategoryDetail />} />
                    
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="/activate/:token" element={<ActivateUser />} />
                    <Route path="forget-password" element={<LoginPage />} />
                    <Route path="set-password/:token" element={<LoginPage />} />
                    
                    <Route path="*" element={<ErrorPage />}></Route>
                    
                </Route>

                <Route path="/admin" element={<CheckPermission accessBy="admin" Component={<AdminLayout />} />}>
                    <Route index element={<AdminDashboard />} />
                    
                    <Route path="banner" element={<><Outlet /></>}>
                        <Route index element={<Banner.BannerListPage />}/>
                        <Route path="create" element={<Banner.BannerCreateForm />}/>
                        <Route path="edit/:id" element={<>Edit Form</>}/>
                    </Route>
                    
                </Route>

                <Route path="/seller" element={<CheckPermission Component={<>Seller Layout</>} accessBy={"seller"} />}>
                    {/* Seller Routes */}
                </Route>
                <Route path="/customer" element={<CheckPermission Component={<>Customer Layout</>} accessBy={"customer"} />}>
                    {/* Customer Routes */}
                </Route>
            </Routes>
        </BrowserRouter>
    </>)
}

export default Routing;