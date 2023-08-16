import React from 'react';
import {Link} from 'react-router-dom';


const HomePage = () => {
    return(
        <div>
            <h1>WFBank</h1>
            <ul>
                <li><Link to = "/login">Login</Link></li>
                <li><Link to = "/newuser">New User</Link></li>
                <li><Link to = "/openaccount">Already</Link></li>
            </ul>
            
        
        </div>
    );
};

export default HomePage;