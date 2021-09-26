import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';



import './Developer.css';

const Developer = (props) => {
    const { name, role, age, gender, img, salary, country } = props.developer;

    const cartIcon = <FontAwesomeIcon icon={faCartPlus} />


    return (
        <div className="developer-cart">
            <img src={img} alt="" />
            <p><span className="blod-text">Name:</span> {name}</p>
            <p><span className="blod-text">Role:</span> {role}</p>
            <p><span className="blod-text">Country:</span> {country}</p>
            <p><span className="blod-text">Age:</span> {age}</p>
            <p><span className="blod-text">Gender:</span> {gender}</p>
            <p><span className="blod-text">Salary:</span> ${salary}</p>

            <button
                onClick={() => props.handelToCart(props.developer)}
                className="btn-cart">{cartIcon} Add to Cart</button>

            <div className="socal-icons">

                <i class="fab fa-github-square"></i>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram-square"></i>
                <i class="fab fa-twitter-square"></i>
            </div>
        </div>
    );
};

export default Developer;