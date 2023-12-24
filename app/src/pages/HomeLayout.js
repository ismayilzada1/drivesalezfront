import {Outlet} from "react-router-dom";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

export default function HomeLayout(){
    return(
        <>
        <Header/>
            <Outlet/>
        <Footer/>
        </>
    )
}