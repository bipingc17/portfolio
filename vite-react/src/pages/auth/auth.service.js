import axiosInstance from "../../config/axios.config";
class AuthService {
    login = async (credentials) => {
        try {
            let response = await axiosInstance.post(
                '/v1/auth/login', 
                credentials
                )
            return response;
        } catch(error){
            throw error;
        }
    }

    register = async(data) => {
        try {
            let response = await axiosInstance.post(
                '/v1/auth/register',
                data, 
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            )
            return response;
        } catch(exception){
            throw exception
        }
    }

    getUserByToken =async (token) => {
        try {
            let response = await axiosInstance.post(
                '/v1/auth/activate/'+token,
                {},
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            )
            return response;
        } catch(exception) {
            throw exception
        }
    }

    getLoggedInUser = async () => {
        try {
            let token = localStorage.getItem('accessToken')
            if(!token){
                throw "Token not set.."
            }
            let userInfo = await axiosInstance.get(
                '/v1/auth/me',
                {
                    headers: {
                        "Authorization": "Bearer "+token,
                        "Content-Type": "application/json"
                    }
                }
            )
            return userInfo;
        } catch(error){
            throw error
        }
    }
}

export default AuthService