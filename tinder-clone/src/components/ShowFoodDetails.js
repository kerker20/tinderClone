import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showFoodDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:5001/api/food/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          food: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowFoodDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:5001/api/food/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowFoodDetails_deleteClick");
      })
  };


  render() {

    const food = this.state.food;
    let FoodItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Name</td>
            <td>{ food.name }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Type</td>
            <td>{ food.type }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Description</td>
            <td>{ food.description }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowFoodDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Food List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Food's Record</h1>
              <p className="lead text-center">
                  View Food's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { FoodItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-md" onClick={this.onDeleteClick.bind(this,food._id)}>Delete Food</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-food/${food._id}`} className="btn btn-outline-info btn-md">
                    Edit Food
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>
    );
  }
}

export default showFoodDetails;