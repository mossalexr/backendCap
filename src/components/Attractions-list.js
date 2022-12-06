import React, { Component } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';

const Attraction = (props) => (
  <div className='text-center mt-4 mx-2 border rounded bg-secondary hvr-grow'>
    <h5>{props.attraction.name}</h5>
    <p>{props.attraction.location}</p>
    <img className='attractionsImg' src={props.attraction.imageURL} alt='otr' />
  </div>
)

export default class AttractionsList extends Component {
  constructor(props) {
    super(props);


    this.state = { attractions: [] };
  }
  componentDidMount() {
    axios.get(BACKEND_URL + 'attractions/')
      .then(response => {
        this.setState({ attractions: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  attractionList() {
    return this.state.attractions.map(currentattraction => {
      return <Attraction attraction={currentattraction} key={currentattraction._id} />;
    })
  }
  render() {
    return (
      <div className='bg pb-5'>
        <h2 className='homeHead center pt-3'>Attractions</h2>
        <div className="container-fluid">
          <div className='d-flex flex-wrap'>
            {this.attractionList()}
          </div>
        </div>
      </div>
    )
  }
}