import React from 'react';
import Banner from '../images/Ffootball2.jpg'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useParams,
    useHistory
} from 'react-router-dom'

const Landingpage = ({logout}) => {
    
    const history = useHistory();

    const userLogout = () => {
        logout();
        history.push('/');
    }
    
    return (
        <section className="landing-page">
            <figure>
                <img src={Banner} alt="banner-image"/>
            </figure>
            <div>
                <h2>hurray</h2>
                <button onClick={userLogout}>logout</button>
            </div>
        </section>
    )
}

export default Landingpage;