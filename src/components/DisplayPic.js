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
console.log(this.state.data)
      return (
        <div className="container" style={{transition: "0.5s", backgroundColor: '#fafafa'}}>
        <div className="container">
        <a style={{cursor: "pointer" }} href={this.state.data.hdurl}><img className="responsive-img" alt="" src={this.state.data.url} /></a>
        </div>
        <div className="container">
        <h2 style={{fontWeight: "bold"}}>{this.state.data.title.toUpperCase()}</h2>
        <div className="row">
        <div className="col s3"><h5 className="flow-text">{this.state.data.date.split('-').reverse().join('/')}</h5></div>
        </div>
        <div className="divider"></div>
        <div className="row">
        <div className="col s12"><p style={{textAlign: "justify"}}>{this.state.data.explanation}</p></div>
        </div>
        <div className="row"><p>Built with Materialize.css and the <a href="https://api.nasa.gov/index.html">NASA API.</a></p></div>
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
