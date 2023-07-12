import { Outlet } from "react-router-dom";
import "./adminLayout.css";
import { AdminFooter, AdminSidebar, AdminTopNav } from "../admin/component";

const AdminLayout = () => {
  return (
    <>
      <AdminTopNav />

      <div id="layoutSidenav">
        <AdminSidebar />
        <div id="layoutSidenav_content" className="mt-5">
          <main>
            <Outlet />
          </main>
          <AdminFooter />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
