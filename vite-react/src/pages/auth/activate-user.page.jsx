import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Auth } from "./";

const ActivateUser = () => {
    // /params
    let params = useParams()
    let navigate = useNavigate();

    //let [query, setQuery] = useSearchParams()
    // ?token=data
    // let token = query.get("token")
    const loadUser = async () => {
        // api call
        try{
            let user = await Auth.authSvc.getUserByToken(params.token);
            toast.success("Your account has been activated successfully. Please login to continue..")
            navigate("/login")
        } catch(exception) {
            let msg = exception.data.msg ?? "Cannot activated your account at this moment. please contact Admin"
            toast.warning(msg)
            navigate("/register")
        }
    }

    useEffect(() => {
        loadUser()
    }, [])
    return (<>
    
    </>)
}

export default ActivateUser;