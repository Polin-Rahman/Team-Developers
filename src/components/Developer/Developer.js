import React from 'react';
import './Developer.css';

const Developer = (props) => {
    const { name, role, age, gender, img, salary, country } = props.developer;
    return (
        <div className="developer-cart">
            <img src={img} alt="" />
            <p><span className="blod-text">Name:</span> {name}</p>
            <p><span className="blod-text">Role:</span> {role}</p>
            <p><span className="blod-text">Country:</span> {country}</p>
            <p><span className="blod-text">Age:</span> {age}</p>
            <p><span className="blod-text">Gender:</span> {gender}</p>
            <p><span className="blod-text">Salary:</span> ${salary}</p>
            <button className="btn-cart"><i class="fas fa-cart-plus"></i> Add to Cart</button>
            <div className="socal-icons">
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-github-square"></i>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram-square"></i>
                <i class="fab fa-twitter-square"></i>
            </div>
        </div>
    );
};

export default Developer;