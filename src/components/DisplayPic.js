import React, { Component } from 'react';
import axios from 'axios';
import Loader from './Loader';

export default class DisplayPic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    }
  }

  componentDidMount() {
    const API_KEY = "eVvCZZGCHiZUQkxAIZYp3HnDlXLZyyFOfWtwCVVE";
    const NASA_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`

    axios.get(NASA_URL).then(response =>
      this.setState({
        data: response.data
      })
    );
  }

  render() {
    if (this.state.data) {

      return (
        <div className="container" style={{ boxShadow: "0px 5px 7px -2px rgba(0, 0, 0, 0.4)", borderRadius:"10px", transition: "0.5s", backgroundColor: '#fafafa'}}>
        <div className="container" style={{marginTop:"25px"}}>
        <a style={{ cursor: "pointer" }} href={this.state.data.hdurl}><img style={{marginTop:"15px"}} className="responsive-img" alt="" src={this.state.data.url} /></a>
        </div>
        <div className="container">
        <h3 style={{fontWeight: "bold"}}>{this.state.data.title.toUpperCase()}</h3>
        <div className="row">
        <div className="col s3"><h5 className="flow-text">{this.state.data.date.split('-').reverse().join('/')}</h5></div>
        </div>
        <div className="divider"></div>
        <div className="row">
        <div className="col s12"><p style={{textAlign: "justify"}}>{this.state.data.explanation}</p></div>
        </div>
        <div className="row"><p>Built with Materialize.css, <a href="http://vincentgarreau.com/particles.js/">ParticlesJs</a> and the <a href="https://api.nasa.gov/index.html">NASA API.</a></p></div>
        </div>
        </div>
      )
    } else {
      return (
        <Loader />
      )
    }
  }
}
