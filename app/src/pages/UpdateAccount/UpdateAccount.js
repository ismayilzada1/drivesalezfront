import React,{useState,useEffect} from "react";
import './UpdateAccount.css'
import {Form} from "react-bootstrap";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const UpdateAccount=()=>{
    const { user } = useSelector((state) => state.auth);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);


    const navigate=useNavigate();



    const [formData, setFormData] = useState({
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,

    });

    useEffect(() => {
        setFormData({
            firstName: user?.firstName,
            lastName: user?.lastName,
            email: user?.email,
        });
    }, [user]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleUpdateAccount = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };


    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
        }
    }, [isLoggedIn, navigate]);

    if (!isLoggedIn) {
        return null;
    }

    return (
        <>

            <>
                <div className='card'>
                <div className="card-header d-flex justify-content-between">
                    <div className="header-title">
                        <h4 className="card-title">Update Account</h4>
                    </div>
                </div>
                <div className="card-body">
                    <div className="new-user-info">
                        <form>
                            <div className="row">

                                <div className="form-group col-md-6">
                                    <label className="form-label" htmlFor="pno">First Name:</label>
                                    <input value={formData.firstName} name="firstName"  onChange={handleInputChange} type="text" className="form-control rounded"/>
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="form-label" htmlFor="pno">Last Name:</label>
                                    <input value={formData.lastName} onChange={handleInputChange} name="lastName" type="text" className="form-control rounded"/>
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="form-label" htmlFor="pno">Email:</label>
                                    <input value={formData.email} onChange={handleInputChange} name="email" type="email" className="form-control rounded"/>
                                </div>


                                <button type="submit" onClick={handleUpdateAccount}   className="btn btn-primary">Update Account</button>


                            </div>
                        </form>

                    </div>

                </div>
                </div>

            </>
        </>
    )
}

export default UpdateAccount;