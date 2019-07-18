import React, { Component } from 'react';
import Preguntas from '../data/preguntas.json'

class Surveys extends Component {

  handleValidate = event => {
    console.log(event.target.className);
  }

  render() {
    return (
      <div >
        <h1> Surveys </h1>
        {Preguntas.map((data, index) => {
          return <div>
            <h2>{data.pregunta}</h2>
            <input className={data.id} onChange={this.handleValidate}/>
          </div>
        })}
        <br/>
        <button > Enviar < /button>
      </div>
    );
  }
}

export default Surveys;
