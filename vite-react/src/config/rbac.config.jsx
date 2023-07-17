import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckPermission = ({Component, accessBy}) => {
    
    let userDetail = {
        role: "admin"
    }
    // loggedin user role 
    // navigate

    if(userDetail.role === accessBy){
        return Component
    } else {
        toast.warning("You do not have previlege to access "+accessBy+" panel!")
        return <Navigate to={"/"+userDetail.role} />
    }
}
export default CheckPermission;