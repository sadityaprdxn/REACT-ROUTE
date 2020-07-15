import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useParams,
    useHistory
} from 'react-router-dom'

const Loginpage = ({login}) => {
    
    const history = useHistory();

    const userLogin = () => {
        login();
        history.push('/landingpage');
    }
    
    return (
        <section className="login-page">
            <h2>click here to see the landing page</h2>
            <button onClick={userLogin}>click me</button>
        </section>
    )
}

export default Loginpage;