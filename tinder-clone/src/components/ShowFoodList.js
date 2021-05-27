import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FoodCard from './FoodCard';

class ShowFoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5001/api/food')
      .then(res => {
        this.setState({
          food: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowFoodList');
      })
  };


  render() {
    const food = this.state.food;
    console.log("PrintFood: " + food);
    let foodList;

    if(!food) {
      foodList = "there is no food record!";
    } else {
      foodList = food.map((food, k) =>
        <FoodCard food={food} key={k} />
      );
    }

    return (
      <div className="ShowFoodList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Food List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-food" className="btn btn-outline-warning float-right">
                + Add New Food
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {foodList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowFoodList;