import React, { PureComponent } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';
import Display from './Display';
import './Calculator.scss';

export default class Calculator extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      total: '0',
      next: '0',
      operation: null,
    };
  }

  onClick = (e) => {
    const newValue = calculate(this.state, e.target.innerText);
    this.setState(newValue);
    const outPut = document.getElementById('output');
    if (newValue.next !== null) {
      outPut.textContent = newValue.next;
    } else {
      outPut.textContent = newValue.total;
    }
  };

  render() {
    return (
      <div className="calculator">
        <Display />
        <Button text="AC" onClick={this.onClick} />
        <Button text="+/-" onClick={this.onClick} />
        <Button text="%" onClick={this.onClick} />
        <Button className="operators" text="&divide;" onClick={this.onClick} />
        <Button text="7" onClick={this.onClick} />
        <Button text="8" onClick={this.onClick} />
        <Button text="9" onClick={this.onClick} />
        <Button className="operators" text="x" onClick={this.onClick} />
        <Button text="4" onClick={this.onClick} />
        <Button text="5" onClick={this.onClick} />
        <Button text="6" onClick={this.onClick} />
        <Button className="operators" text="-" onClick={this.onClick} />
        <Button text="1" onClick={this.onClick} />
        <Button text="2" onClick={this.onClick} />
        <Button text="3" onClick={this.onClick} />
        <Button className="operators" text="+" onClick={this.onClick} />
        <Button id="zero" text="0" onClick={this.onClick} />
        <Button text="." onClick={this.onClick} />
        <Button className="operators" text="=" onClick={this.onClick} />
      </div>
    );
  }
}
