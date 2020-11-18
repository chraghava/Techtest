import React, { Component } from 'react';
class Generate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pinsData: {
        pinone: '',
        pintwo: '',
        pinthree: '',
        pinfour: '',
        pinfive: ''
      }
    };

    this.change = this.change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  change = e => {
    e.preventDefault();
    const re = /^[1\b]+$/;
    if (re.test(e.target.value)) {
    this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }


  render() {
      const { pinone, pintwo, pinthree, pinfour, pinfive } = this.state
    return (
      <div className="top-m">
        <div>
    
        <form onSubmit={this.handleSubmit}>
        <input 
            type="text"
            minLength="4"
            maxLength="4"
            size="4"
            name="pinone"
            value={pinone} 
            onChange={e => this.change(e)}
        />

        <input 
            type="text"
            minLength="4"
            maxLength="4"
            size="4"
            name="pintwo"
            value={pintwo} 
            onChange={e => this.change(e)} 
        /> 

        <input 
            type="text"
            minLength="4"
            maxLength="4"
            size="4"
            name="pinthree"
            value={pinthree} 
            onChange={e => this.change(e)} 
        />
        
        <input 
            type="text"
            minLength="4"
            maxLength="4"
            size="4"
            name="pinfour"
            value={pinfour} 
            onChange={e => this.change(e)} 
        />

        <input 
            type="text"
            minLength="4"
            maxLength="4"
            size="4"
            name="pinfive"
            value={pinfive} 
            onChange={e => this.change(e)} 
        />
        <br />

        <input type="submit" class="btn btn-brdr" value="Generate" />
        <input type="button" class="btn btnblue" value="Save" />
        </form>
      </div>
      </div>
    );
  
  }

}

export default Generate;






