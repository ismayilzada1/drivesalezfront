import {useSelector} from "react-redux";
import {Navigate,useLocation} from "react-router-dom";

export default function PrivateRoute({children}){

    const { accessToken } = useSelector((state) => state.auth);
    let sessionToken= sessionStorage.getItem('authToken');
    const location =useLocation();

    if(!accessToken && !sessionToken){
        return <Navigate to={'/auth/Login'} state={{
            return_url:location.pathname + location.search
        }}/>
    }
    return children;

}