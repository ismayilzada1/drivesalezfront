import React,{useState,useEffect} from "react";
import './UpdateAccount.css'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {ChangeEmail, logoutUser, sendOtp} from "../../Store/Auth/authActions";
import {useTranslation} from "react-i18next";
import LoadingPage from "../../components/ui/LoadingPage";

const UpdateAccount=()=>{
    const { user,loading } = useSelector((state) => state.auth);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const { accessToken } = useSelector((state) => state.auth);
    const{ t}=useTranslation();
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const[otp,setOtp]=useState('');

    const dispatch=useDispatch();

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const handleUpdateAccount = async(e) => {
        e.preventDefault();
        if(!otp || !email){return null}
        try {

            const requestBody={
                "validateRequest": {
                    "email": user?.email,
                    "otp": otp
                },
                "newMail": email
            }

            const response= await dispatch(ChangeEmail(requestBody,accessToken));

            if (response.status === 200) {
                setAlertMessage("Email Changed succesfully !");
                setShowSuccessAlert(true);

                if (accessToken) {
                    await dispatch (logoutUser (accessToken));
                    window.location.reload();
                }
                else{
                    const token=sessionStorage.getItem('authToken');
                    if(token){
                        await dispatch (logoutUser (token));
                        window.location.reload();
                    }
                    else{
                        console.log ("Something went wrong with tokens");
                    }
                }

            } else {
                setShowAlert(true);
                setAlertMessage('Something went wrong !');
            }
        } catch (error) {
            setShowAlert(true);
            setAlertMessage('Something went wrong !');
        }


    };


    useEffect(() => {
        const sendOtpAsync = async () => {
            try {
                await dispatch(sendOtp(user.email));
            } catch (error) {
                console.error('Error sending OTP:', error);
            }
        };

        sendOtpAsync();
    }, [dispatch, user.email]);


    if(loading){
        return <LoadingPage/>
    }

    return (
        <>
                <div className='card'>
                <div className="card-header d-flex justify-content-between">
                    <div className="header-title">
                        <h4 className="card-title">{t("updateAccount")}</h4>
                    </div>
                </div>
                <div className="card-body">
                    <div className="new-user-info">
                        <form>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label className="form-label" htmlFor="pno">{t("enterNewMail")}:</label>
                                    <input value={email}  onChange={(e) => setEmail(e.target.value)} name="email" type="email" className="form-control rounded"/>
                                </div>

                                <div className="form-group col-md-12">
                                    <label className="form-label" htmlFor="pno">{t("enterOtp")}:</label>
                                    <input value={otp}  onChange={(e) => setOtp(e.target.value)} name="otp" type="number" className="form-control rounded"/>
                                </div>

                                <button type="submit" onClick={handleUpdateAccount} className="btn btn-primary">{t("updateEmail")}</button>

                            </div>

                            {showAlert && (
                                <div className="alert alert-warning mt-3" role="alert">
                                    {alertMessage}
                                </div>
                            )}
                            {showSuccessAlert && (
                                <div className="alert alert-success mt-3" role="alert">
                                    {alertMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
                </div>
        </>
    )
}

export default UpdateAccount;