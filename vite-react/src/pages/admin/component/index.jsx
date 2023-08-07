import { NavLink, useNavigate } from "react-router-dom";
import noUser from "../../../assets/images/no-user.png";
import { UserImage } from "../../../components/image.components";
import { toast } from "react-toastify";

export const AdminTopNav = () => {
  const toggleSidebar = (e) => {
    e.preventDefault();
    document.body.classList.toggle("sb-sidenav-toggled");
  };
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault()
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshtoken")
    localStorage.removeItem("user")
    toast.success("Thankyou for using our system!!")
    navigate("/login")
  }
  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark fixed-top">
        <NavLink className="navbar-brand ps-3" to="/admin">
          Admin Panel
        </NavLink>

        <button
          onClick={toggleSidebar}
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          href="#!"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"></div>
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <UserImage src={noUser} />
              {/* <img src={noUser} alt="" className="img img-fluid" /> */}
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item" href="#!">
                  Profile Update
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <NavLink onClick={logout} className="dropdown-item" to="/login">
                  Logout
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export const AdminSidebar = () => {
  return (
    <>
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu">
            <div className="nav">
              <div className="sb-sidenav-menu-heading">Core</div>

              <NavLink className="nav-link" to="/">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-home"></i>
                </div>
                Web Preview
              </NavLink>

              <div className="sb-sidenav-menu-heading">Core Features</div>

              <a
                className="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#banner"
                aria-expanded="false"
                aria-controls="banner"
              >
                <div className="sb-nav-link-icon">
                  <i className="fas fa-images"></i>
                </div>
                Banner Management
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down"></i>
                </div>
              </a>
              <div
                className="collapse"
                id="banner"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <NavLink className="nav-link" to="/admin/banner/create">
                    Add Banner
                  </NavLink>
                  <NavLink className="nav-link" to="/admin/banner">
                    List Banner
                  </NavLink>
                </nav>
              </div>

			  <NavLink className="nav-link" to="/">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tag"></i>
                </div>
                Brand Management
				{/* <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-right"></i>
                </div> */}
              </NavLink>
			  <NavLink className="nav-link" to="/">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tag"></i>
                </div>
                Category Management
				{/* <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-right"></i>
                </div> */}
              </NavLink>

			  <NavLink className="nav-link" to="/">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tag"></i>
                </div>
                User Management
				{/* <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-right"></i>
                </div> */}
              </NavLink>

			  <NavLink className="nav-link" to="/">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tag"></i>
                </div>
                Product Management
				{/* <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-right"></i>
                </div> */}
              </NavLink>

			  <NavLink className="nav-link" to="/">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tag"></i>
                </div>
                Order Management
				{/* <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-right"></i>
                </div> */}
              </NavLink>

			  <NavLink className="nav-link" to="/">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tag"></i>
                </div>
                Transactions Management
				{/* <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-right"></i>
                </div> */}
              </NavLink>

			  <NavLink className="nav-link" to="/">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tag"></i>
                </div>
                Review Management
				{/* <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-right"></i>
                </div> */}
              </NavLink>
            </div>
          </div>
          <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            Sandesh Bhattarai
          </div>
        </nav>
      </div>
    </>
  );
};

export const AdminFooter = () => {
  return (
    <>
      <footer className="py-4 bg-light mt-auto">
        <div className="container-fluid px-4">
          <div className="d-flex align-items-center justify-content-between small">
            <div className="text-muted">Copyright &copy; Your Website 2023</div>
            <div>
              <a href="#">Privacy Policy</a>
              &middot;
              <a href="#">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
