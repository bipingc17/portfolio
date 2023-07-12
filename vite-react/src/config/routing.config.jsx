import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import HomePage from "../pages/home";
import ErrorPage from "../pages/errors/404.page";
import CategoryDetail from "../pages/category/detail.page";
import HomePageLayout from "../pages/layouts/home.layout";
import AdminLayout from "../pages/layouts/admin.layout";
import AdminDashboard from "../pages/admin/dasboard.page";

import LoginPage from "../pages/auth/login.page";
import RegisterPage from "../pages/auth/register.page";

const Routing = () => {
    // url http://localhost:5173/category/sub-category/sub-cat-2 => 2048
    
    return (<>
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
                    <Route path="forget-password" element={<LoginPage />} />
                    <Route path="set-password/:token" element={<LoginPage />} />
                    
                    <Route path="*" element={<ErrorPage />}></Route>
                    
                </Route>

                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<AdminDashboard />} />
                    
                    <Route path="banner" element={<><Outlet /></>}>
                        <Route index element={<>List</>}/>
                        <Route path="create" element={<>Form</>}/>
                        <Route path="edit/:id" element={<>Edit Form</>}/>
                    </Route>
                    
                </Route>
            </Routes>
        </BrowserRouter>
    </>)
}

export default Routing;