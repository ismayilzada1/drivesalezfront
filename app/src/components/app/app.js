import React, { useEffect } from "react";
import './app.css'
import {useRoutes} from 'react-router-dom'
import routes from '../../routes'

function App() {
    return(
        <div className={'app-container'}>
            {useRoutes(routes)}
        </div>
    )
}

export default App;
