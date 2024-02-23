import React, {useEffect, useState} from "react";
import "./AccountTab.css"
import {useDispatch, useSelector} from "react-redux";
import {GetUserLimits} from "../../../Store/Announcement/AnnouncementActions";
import {AddAnnouncementLimit, TopUpBalance} from "../../../Store/Payment/PaymentActions";
import CommonDataService from "../../../api-services/CommonDataService";
import {useTranslation} from "react-i18next";


const AccountTab = () => {

    const {accessToken}=useSelector(state => state.auth)
    const {t}=useTranslation();

    const commonDataService=new CommonDataService();

    const [userLimit,setUserLimit]=useState();

    const [announcementPricings,setAnnouncementPricings]=useState([]);
    const [SelectedSubscription,setSelectedSubscription]=useState(null);
    const [SubscriptionCount,setSubscriptionCount]=useState(1);


    const dispatch = useDispatch();

    useEffect(()=>
    {
        const fetchData = async () => {
            try {
                const response = await dispatch(GetUserLimits(accessToken));
                setUserLimit(response);

                const responseSubscriptions=commonDataService.getAllAnnouncementPricings().then((resp)=>{
                    console.log (resp);
                    setAnnouncementPricings(resp);
                });
            } catch (ex) {
                console.log(ex);
            }
        };

        fetchData();
    },[dispatch]);


    const {
        accountBalance,
        premiumLimit,
        regularLimit
    } = userLimit || { accountBalance: 0, premiumLimit: 0, regularLimit: 0 };


    //Add Balance Start
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [expireMonth, setExpireMonth] = useState();
    const [expireYear, setExpireYear] = useState();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [sum, setSum] = useState(0);
    // Add Balance Finish


    const handleRadioChange = (selectedSubscription) => {
        setSelectedSubscription(selectedSubscription);
    };
    const handleAddBalance=async ()=>{
        const requestBody = {
            "cardNumber": cardNumber,
            "cvv": cvv,
            "expireMonth": expireMonth,
            "expireYear": expireYear,
            "firstName": firstName,
            "lastName": lastName,
            "sum": sum

        };

        const response=await dispatch(TopUpBalance(requestBody,accessToken));
        if(response && response.status===200)
        {
            window.location.reload();
        }

    }


    const handleAddAnnouncementBalance=async()=>{

        const response=await dispatch(AddAnnouncementLimit(SelectedSubscription.id,SubscriptionCount,accessToken));
        if(response && response.status===200)
        {
            window.location.reload();
        }
    }

    return (
        <>
            <div className='account-container'>
                <div className='card custom-premium-announcement-balance-card text-center'>
                    <i className="bi bi-cash-stack modified"></i>
                    <h5>{t("accountBalance")}</h5>
                    <hr/>

                    <div className='d-flex flex-column align-items-start justify-content-center'>
                        <h1>{accountBalance} AZN</h1>
                        <button className='btn btn-add-announcement' data-bs-toggle={'modal'} data-bs-target={'#AddBalanceModal'} style={{marginTop: '30px'}}>{t("addBalance")}</button>
                    </div>
                </div>

                <div className='card custom-premium-announcement-balance-card text-center'>
                    <i className="bi bi-megaphone modified"></i>
                    <h5>{t("regularAnnouncementBalance")}</h5>
                    <hr/>

                    <div className='d-flex flex-column align-items-start justify-content-center'>
                        <h1>{regularLimit}</h1>
                    </div>
                </div>

                <div className='card custom-premium-announcement-balance-card text-center'>
                    <i className="bi bi-gem modified"></i>
                    <h5>{t("premiumAnnouncementBalance")}</h5>
                    <hr/>

                    <div className='d-flex flex-column align-items-start justify-content-center'>
                        <h1>{premiumLimit}</h1>
                    </div>

                </div>





                {/*<div className='card custom-statisctics-count-card text-center'>*/}
                {/*    <h4>Statistics of Announcements</h4>*/}
                {/*    <hr/>*/}
                {/*    <div className='d-flex flex-row justify-content-between align-items-center' style={{color: '#fff'}}>*/}
                {/*        <div className='d-flex flex-column justify-content-center align-items-center'>*/}
                {/*            <h3>0</h3>*/}
                {/*            <p className={'word-wrap'}>In Website</p>*/}
                {/*        </div>*/}
                {/*        <div className="vr"></div>*/}
                {/*        <div className='d-flex flex-column justify-content-center align-items-center'>*/}
                {/*            <h3>0</h3>*/}
                {/*            <p>Rejected</p>*/}
                {/*        </div>*/}
                {/*        <div className="vr"></div>*/}
                {/*        <div className='d-flex flex-column justify-content-center align-items-center'>*/}
                {/*            <h3>0</h3>*/}
                {/*            <p>Expired</p>*/}
                {/*        </div>*/}

                {/*    </div>*/}


                {/*</div>*/}



            </div>



            <div className="modal fade" id="AddBalanceModal" tabIndex="-1" role="dialog"
                 aria-labelledby="AddBalanceModal" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{t("addBalance")}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">



                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">{t("nav.firstName")}</label>
                                <input value={firstName} onChange={(e) => setFirstName (e.target.value)}
                                       type="text" className="form-control mb-0" id="exampleInputEmail1"
                                />

                                <label htmlFor="exampleInputEmail1">{t("nav.lastName")}</label>
                                <input value={lastName} onChange={(e) => setLastName (e.target.value)}
                                       type="text" className="form-control mb-0" id="exampleInputEmail1"
                                />


                                <label htmlFor="exampleInputEmail1">{t("cardNumber")}</label>
                                <input value={cardNumber} onChange={(e) => setCardNumber (e.target.value)}
                                       type="text" className="form-control mb-0" id="exampleInputEmail1"
                                       />

                                <label htmlFor="exampleInputEmail1">CVV</label>
                                <input value={cvv} maxLength={3} onChange={(e) => setCvv (e.target.value)}
                                       type="text" className="form-control mb-0" id="exampleInputEmail1"
                                />


                                <div className={'row'}>

                                    <div className={'col sm-6'}>
                                <label htmlFor="expireMonth">{t("expirationYear")}</label>
                                <input
                                    value={expireYear}
                                    onChange={(e) => setExpireYear(e.target.value)}
                                    type="text"
                                    className="form-control mb-0"
                                    id="expireMonth"
                                />
                                    </div>
                                    <div className={'col sm-6'}>
                                <label htmlFor="expireMonth">{t("expirationMonth")}</label>
                                        <input
                                            value={expireMonth}
                                            onChange={(e) => setExpireMonth(e.target.value)}
                                            type="text"
                                            className="form-control mb-0"
                                            id="expireMonth"
                                        />
                                    </div>
                                </div>

                                <label htmlFor="exampleInputEmail1">{t("sum")}</label>
                                <input value={sum} maxLength={4} min={0} onChange={(e) => setSum (e.target.value)}
                                       type="number" className="form-control mb-0" id="exampleInputEmail1"
                                />


                            </div>

                        </div>
                        <button type="button" data-toggle="modal"
                                data-target="#changeModal" onClick={handleAddBalance} className="btn btn-warning m-3">{t("addBalance")}</button>

                    </div>
                </div>
            </div>

            <div className="modal fade" id="AddAnnouncementBalanceModal" tabIndex="-1" role="dialog"
                 aria-labelledby="AddAnnouncementBalanceModal" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{t("buyAnnouncementBalance")}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                {announcementPricings.map((Pricing, index) => (
                                    <div key={index} className="mb-3">
                                        <div className="form-check">
                                            <input
                                                type="radio"
                                                id={Pricing.id}
                                                name="subscription"
                                                value={Pricing.id}
                                                checked={SelectedSubscription===Pricing}
                                                onChange={() => {handleRadioChange (Pricing)}}
                                                className="form-check-input"
                                            />
                                            <label
                                                htmlFor={Pricing.id}
                                                className="form-check-label"
                                            >
                                                {t(Pricing?.pricingName)} {Pricing.price.price}{' '}
                                                {Pricing.price.currency.currencyName}
                                            </label>
                                        </div>
                                    </div>
                                ))}

                                <label htmlFor="exampleInputEmail1">{t("quantity")}</label>
                                <input value={SubscriptionCount} min={1} onChange={(e) => setSubscriptionCount(e.target.value)}
                                       type="number" className="form-control mb-0" id="exampleInputEmail1"
                                />

                                <label className={'h4 mt-2'}>
                                    {t("sum")}: {SelectedSubscription ? SelectedSubscription.price.price * SubscriptionCount : 0}
                                </label>


                            </div>
                        </div>
                        <button type="button" data-toggle="modal" disabled={!SelectedSubscription}
                                 onClick={handleAddAnnouncementBalance} className="btn btn-warning m-3">Buy</button>

                    </div>
                </div>
            </div>
            <div className="d-flex  mt-auto p-3">
                <button className='btn btn-add-announcement'  data-bs-toggle={'modal'} data-bs-target={'#AddAnnouncementBalanceModal'}>{t("buyAnnouncementBalance")}</button>
            </div>
        </>
    );
}

export default AccountTab;