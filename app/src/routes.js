import {Route, Routes} from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Home from "./pages/home";
import PrivacyPolicy from "./pages/StaticPages/PrivacyPolicy";
import TermsOfUse from "./pages/StaticPages/TermsOfUse";
import ComingSoon from "./pages/StaticPages/ComingSoon";
import NewAnnouncement from "./pages/NewAnnouncement";
import AnnouncementDetails from "./pages/announcementDetails";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile";
import UpdateAccount from "./pages/UpdateAccount";
import AnnouncementDetailsUserProfile from "./pages/announcementDetailsUserProfile";
import LoadingPage from "./components/ui/LoadingPage";
import AuthLayout from "./pages/Auth/AuthLayout";
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";
import ResetPassword from "./pages/Auth/resetPassword";
import ForgotPassword from "./pages/Auth/forgotPassword";
import VerifyEmail from "./pages/Auth/verifyEmail";
import ChangePassword from "./pages/Auth/ChangePassword";
import NotFound from "./pages/errors/NotFound";
import React from "react";


const routes=[
    {
        path: "/",
        element:<HomeLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'privacy-policy',
                element: <PrivacyPolicy/>
            },
            {
                path:'terms-of-use',
                element: <TermsOfUse/>
            },
            {
                path:'coming-soon',
                element: <ComingSoon/>
            },
            {
                path:'new-announcement',
                element:<PrivateRoute><NewAnnouncement/></PrivateRoute>
            },
            {
                path:'AnnouncementDetails/:id',
                element:<AnnouncementDetails/>
            },
            {
                path:'profile',
                element:<PrivateRoute><Profile/></PrivateRoute>
            },
            {
                path:'updateAccount',
                element:<PrivateRoute><UpdateAccount/></PrivateRoute>
            },
            {
                path:'AnnouncementDetailsUserProfile/:id',
                element:<PrivateRoute><AnnouncementDetailsUserProfile/></PrivateRoute>
            },
            {
                path:'changePassword',
                element:<PrivateRoute><ChangePassword/></PrivateRoute>
            },
        ]

    },
    {
        path: "/loading",
        element: <LoadingPage/>
    },
    {
        path: '/auth',
        element: AuthLayout,
        children: [
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: 'reset-password',
                element: <ResetPassword/>
            },
            {
                path: 'forgot-password',
                element: <ForgotPassword/>
            },
            {
                path: 'verifyEmail',
                element: <VerifyEmail/>
            }
        ]
    },
    {
        path: '/*',
        element: <NotFound/>
    }

]

export default routes;