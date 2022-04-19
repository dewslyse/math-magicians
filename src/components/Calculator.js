import React, { PureComponent } from 'react';
import './Calculator.scss';

export default class Calculator extends PureComponent {
  render() {
    return (
      <div className="calculator">
        <input id="output" type="text" value="0" />
        <button type="button">AC</button>
        <button type="button">+/&ndash;</button>
        <button type="button">%</button>
        <button type="button" className="operators">&divide;</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="operators">&times;</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="operators">&ndash;</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="operators">+</button>
        <button type="button" id="zero">0</button>
        <button type="button">&bull;</button>
        <button type="button" className="operators">=</button>
      </div>
    );
  }
}
