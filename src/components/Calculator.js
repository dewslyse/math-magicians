import React, { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';
import Display from './Display';
import './Calculator.scss';

const Calculator = () => {
  const [inputValue, setInputValue] = useState({
    total: '0',
    next: '0',
    operation: null,
  });

  const onClick = (e) => {
    const newValue = calculate(inputValue, e.target.innerText);
    setInputValue(newValue);
    const outPut = document.getElementById('output');
    if (newValue.next !== null) {
      outPut.textContent = newValue.next;
    } else {
      outPut.textContent = newValue.total;
    }
  };

  return (
    <div className="calculator">
      <Display />
      <Button text="AC" onClick={onClick} />
      <Button text="+/-" onClick={onClick} />
      <Button text="%" onClick={onClick} />
      <Button className="operators" text="&divide;" onClick={onClick} />
      <Button text="7" onClick={onClick} />
      <Button text="8" onClick={onClick} />
      <Button text="9" onClick={onClick} />
      <Button className="operators" text="x" onClick={onClick} />
      <Button text="4" onClick={onClick} />
      <Button text="5" onClick={onClick} />
      <Button text="6" onClick={onClick} />
      <Button className="operators" text="-" onClick={onClick} />
      <Button text="1" onClick={onClick} />
      <Button text="2" onClick={onClick} />
      <Button text="3" onClick={onClick} />
      <Button className="operators" text="+" onClick={onClick} />
      <Button id="zero" text="0" onClick={onClick} />
      <Button text="." onClick={onClick} />
      <Button className="operators" text="=" onClick={onClick} />
    </div>
  );
};

export default Calculator;
