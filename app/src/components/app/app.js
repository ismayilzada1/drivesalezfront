import React, { useEffect } from "react";
import './app.css'
import {useRoutes} from 'react-router-dom'
import routes from '../../routes'
import {useTranslation} from "react-i18next";

function App() {

    const {i18n} = useTranslation ();

    const getFontClass = () => {
        switch (i18n.language) {
            case 'aze':
                return 'azerbaijani-font';
            case 'ru':
                return 'russian-font';
            case 'tr':
                return 'turkish-font';
            default:
                return 'font';
        }
    };

    return(
        <div className={`app-container ${getFontClass()}`}>
            {useRoutes(routes)}
        </div>
    )
}

export default App;
