import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const FoodCard = (props) => {
    const food = props.food;

    return (
        <div className="card-container">
            <img src="https://i.ibb.co/Xy600rp/Hamburger.gif" width="250" height="200" alt="" />
            <div className="desc">
                <h2><strong>FoodName: </strong>
                    <Link className="text-light" to={`/show-food/${food._id}`}>
                        {food.name}
                    </Link>
                </h2>
                <h3 className="text-success"><strong>Type: </strong>{food.type}</h3>
                <p><strong>Description: </strong> {food.description}</p>
            </div>
        </div>
    )
};

export default FoodCard;