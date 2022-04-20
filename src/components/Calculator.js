/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */

import React, { PureComponent } from 'react';
import Button from './Button';
import './Calculator.scss';

export default class Calculator extends PureComponent {
  render() {
    return (
      <div className="calculator">
        <input id="output" type="text" value="0" />
        <Button text="AC" />
        <Button text="+/&ndash;" />
        <Button text="%" />
        <Button className="operators" text="&divide;" />
        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <Button className="operators" text="&times;" />
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button className="operators" text="&ndash;" />
        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button className="operators" text="+" />
        <Button id="zero" text="0" />
        <Button text="&bull;" />
        <Button className="operators" text="=" />
      </div>
    );
  }
}
