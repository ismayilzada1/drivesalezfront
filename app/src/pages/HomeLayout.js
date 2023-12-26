import {Outlet} from "react-router-dom";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import {useDispatch, useSelector} from "react-redux";
import {logoutUserSuccess} from "../Store/Auth/AuthSlice";

export default function HomeLayout(){

    const { accessToken } = useSelector((state) => state.auth);
    const sessionToken=sessionStorage.getItem('authToken');

    const dispatch=useDispatch();

    if(!accessToken && !sessionToken){
        dispatch(logoutUserSuccess());
    }


    return(
        <>
        <Header/>
            <Outlet/>
        <Footer/>
        </>
    )
}