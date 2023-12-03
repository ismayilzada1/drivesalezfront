import React, {useState} from "react";
import "./AccountTab.css"

const AccountTab = () => {


    return (
        <>
            <div className='account-container'>
                <div className='card custom-premium-announcement-balance-card text-center'>
                    <i className="bi bi-cash-stack modified"></i>
                    <h5>Account Balance</h5>
                    <hr/>

                    <div className='d-flex flex-column align-items-start justify-content-center'>
                        <h1>0,00 AZN</h1>
                        <button className='btn btn-add-announcement' style={{marginTop: '30px'}}>Add</button>
                    </div>
                </div>


                <div className='card custom-premium-announcement-balance-card text-center'>
                    <i className="bi bi-megaphone modified"></i>
                    <h5>Regular Announcement Balance</h5>
                    <hr/>

                    <div className='d-flex flex-column align-items-start justify-content-center'>
                        <h1>0</h1>
                        <button className='btn btn-add-announcement' style={{marginTop: '30px'}}>Add Announcement
                        </button>
                    </div>

                </div>

                <div className='card custom-premium-announcement-balance-card text-center'>
                    <i className="bi bi-gem modified"></i>
                    <h5>Premium Announcement Balance</h5>
                    <hr/>

                    <div className='d-flex flex-column align-items-start justify-content-center'>
                        <h1>0</h1>
                        <button className='btn btn-add-announcement' style={{marginTop: '30px'}}>Add Announcement
                        </button>
                    </div>

                </div>

                <div className='card custom-statisctics-count-card text-center'>
                    <h4>Statistics of Announcements</h4>
                    <hr/>
                    <div className='d-flex flex-row justify-content-between align-items-center' style={{color: '#fff'}}>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <h3>0</h3>
                            <p>In Website</p>
                        </div>
                        <div className="vr"></div>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <h3>0</h3>
                            <p>In Website</p>
                        </div>
                        <div className="vr"></div>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <h3>0</h3>
                            <p>In Website</p>
                        </div>

                    </div>


                </div>

            </div>
        </>
    );
}

export default AccountTab;