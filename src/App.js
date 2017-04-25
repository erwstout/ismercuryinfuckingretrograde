import React, { Component } from 'react';
import './App.css';
import Loading from './Components/Loading.js';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'elemental';

class App extends Component {

  constructor(){
    super();
    this.state = {
      retrograde: null,
      loading: true
    }
  }

  getApi(){
    // error handling
    function checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response
      } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }
    }

    fetch('https://mercuryretrogradeapi.com/')
    .then(checkStatus)
    .then(response => response.json())
    .then(mercury => {

      let mercuryState = mercury.is_retrograde;

      // set states when games are fetched
      this.setState({
        retrograde: mercuryState,
        loading: false
      });

    }).catch(error => console.error(error) );
  }

  componentWillMount(){
    this.getApi();
  }

  render() {

    if( this.state.loading ){
      return(
        <Loading />
      )
    } else{
      return (
        <div className="App container container--justify-content-center">
          <div className="row">
            <div className="col-10 col-centered">
              <h1>
                Is Mercury In Fucking Retrograde?!
              </h1>
              <h2>
                {this.state.retrograde ? 'Yes' : 'Nope'}
              </h2>
            </div>
          </div>
          <footer className="site-footer">
            <div className="container">
              <div className="row row--justify-content-center">
                <div className="sm-col-2 col-1">
                  <a href="https://twitter.com/erwstout" title="Follow on Twitter" role="link">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="sm-col-2 col-1">
                  <a href="https://ericwstout.com" title="Visit the developer's portfolio" role="link">
                    <i className="fa fa-desktop" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="sm-col-2 col-1">
                  <a href="https://github.com/erwstout/ismercuryinfuckingretrograde" title="View on GitHub" role="link">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </footer>
          <Button onClick={this.toggleModal}>Launch Modal</Button>
          <Modal isOpen={this.state.modalIsOpen} onCancel={this.toggleModal} backdropClosesModal>
          	<ModalHeader text="Lots of text to show scroll behavior" showCloseButton onClose={this.toggleModal} />
          	<ModalBody><p>Hello, World</p></ModalBody>
          	<ModalFooter>
          		<Button type="primary" onClick={this.toggleModal}>Close modal</Button>
          		<Button type="link-cancel" onClick={this.toggleModal}>Also closes modal</Button>
          	</ModalFooter>
          </Modal>
        </div>
      );
    }
  }
}

export default App;
