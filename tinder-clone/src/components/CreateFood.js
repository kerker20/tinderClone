import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateFood extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      type:'',
      description:'',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      type: this.state.type,
      description: this.state.description,
    };

    axios
      .post('http://localhost:5001/api/food', data)
      .then(res => {
        this.setState({
          name: '',
          type:'',
          description:'',
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateFood!");
      })
  };

  render() {
    return (
      <div className="CreateFood">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Food List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Food</h1>
              <p className="lead text-center">
                  Create new Food
              </p>

<div className="row justify-content-center">
              <div class="card w-50 border-dark">
  <div class="card-body bg-dark">
              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of the Food'
                    name='name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='type'
                    name='type'
                    className='form-control'
                    value={this.state.type}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Describe this food'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>
<center>  <input
                    type="submit"
                    className="btn btn-outline-warning btn-md mt-4"
                /></center>
              </form>


              </div>
</div>
</div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateFood;