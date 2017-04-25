import React, { Component } from 'react';
import '../Styles/Loading.css';
import loading from '../Assets/img/ring-alt.svg';

class Loading extends Component {


  render() {
    return (
      <div className="App container container--justify-content-center">
        <div className="row">
          <div className="col-2 col-centered">
            <img src={loading} alt="Loading" role="presentation" />
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
