import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Auth } from "../pages/auth";

const CheckPermission = ({Component, accessBy}) => {
    let [userInfo, setUserInfo] = useState();
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(false);
    
    const getLoggedInUser = async() => {
        try {
            let user = await Auth.authSvc.getLoggedInUser();
            setUserInfo(user.result);
        } catch(exception){
            // exception
            toast.error("Could not process your request at this moment.")
            setError(true)
        } finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        // get logged in user
        getLoggedInUser()
    }, [])


    if(error){
        return <>Error Loading Content...</>
    } else {
        if(loading) {
            return <>Loading...</>
        } else if(!loading && userInfo && userInfo.role === accessBy) {
            return Component
        } else {
            toast.warning("You do not have permission to access this!!")
            return <Navigate to={"/"+userInfo.role} />
        }
    }
}
export default CheckPermission;