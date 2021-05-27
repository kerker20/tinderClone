import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateFoodInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      description: '',
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:5001/api/food/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          name: res.data.name,
          type: res.data.type,
          description: res.data.description,
        })
      })
      .catch(err => {
        console.log("Error from UpdateFoodInfo");
      })
  };

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
      .put('http://localhost:5001/api/food/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-food/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateFoodInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateFoodInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Food List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Food</h1>
              <p className="lead text-center">
                  Update Food's Info
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
              <div class="card w-50 border-dark">
  <div class="card-body bg-dark">

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="name">Name</label>
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
            <label htmlFor="type">Type</label>
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
            <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='Describe this book'
                name='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>
<center> <button type="submit" className="btn btn-outline-info btn-md">Update Food</button></center>
          
            </form>


            </div>
            </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateFoodInfo;