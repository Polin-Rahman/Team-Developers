import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faGithubSquare, faInstagramSquare, faLinkedin, faTwitterSquare, } from '@fortawesome/free-brands-svg-icons';

import './Developer.css';

const Developer = (props) => {
    //destructuring
    const { name, role, age, gender, img, salary, country } = props.developer;

    //inons 
    const cartIcon = <FontAwesomeIcon icon={faCartPlus} />
    const linkIcon = <FontAwesomeIcon icon={faLinkedin} />
    const gitIcon = <FontAwesomeIcon icon={faGithubSquare} />
    const fbIcon = <FontAwesomeIcon icon={faFacebookSquare} />
    const instaIcon = <FontAwesomeIcon icon={faInstagramSquare} />
    const twitIcon = <FontAwesomeIcon icon={faTwitterSquare} />

    //single developer details
    return (
        <div className="developer-cart">
            <img src={img} alt="" />
            <p><span className="blod-text">Name:</span> {name}</p>
            <p><span className="blod-text">Role:</span> {role}</p>
            <p><span className="blod-text">Country:</span> {country}</p>
            <p><span className="blod-text">Age:</span> {age}</p>
            <p><span className="blod-text">Gender:</span> {gender}</p>
            <p><span className="blod-text">Salary: </span>$ {salary}</p>

            <button
                onClick={() => props.handelToCart(props.developer)}
                className="btn-cart">{cartIcon} Add to Cart</button>

            <div className="socal-icons">
                <span className="icon">{linkIcon}</span>
                <span className="icon">{gitIcon}</span>
                <span className="icon">{fbIcon}</span>
                <span className="icon">{instaIcon}</span>
                <span className="icon">{twitIcon}</span>
            </div>
        </div>
    );
};

export default Developer;