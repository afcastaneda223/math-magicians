/* eslint-disable class-methods-use-this */
import React from 'react';
import calculate from '../logic/calculate';
// import calculate from '../logic/calculate';

export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  onChangeHandler = (event) => {
    const getForm = document.getElementById('InputNumber');
    const obj = calculate(this.state, event.target.name);
    this.setState(obj);
    if (obj.next) {
      getForm.value = obj.next;
    } else if (obj.total) {
      getForm.value = obj.total;
    } else if (!obj.total && !obj.next && !obj.operation) {
      getForm.value = null;
    }
    return true;
  };

  BtnValues = (props) => {
    const arr = [];
    props.name.forEach((ele) => {
      let btnConst = '0';
      if (ele === '0') {
        btnConst = <button type="button" name={ele} onClick={this.onChangeHandler} key={ele} className="btn btn-light col-6 py-lg-5 py-sm-4">{ele}</button>;
      } else if (ele === '÷' || ele === 'x' || ele === '-' || ele === '+' || ele === '=') {
        btnConst = <button type="button" name={ele} onClick={this.onChangeHandler} key={ele} className="btn btn-warning col py-lg-5 py-sm-4">{ele}</button>;
      } else {
        btnConst = <button type="button" name={ele} key={ele} onClick={this.onChangeHandler} className="btn btn-light col py-lg-5 py-sm-4">{ele}</button>;
      }
      arr.push(btnConst);
    });
    return arr;
  }

  render() {
    const arr = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    return (
      <div className="container" id="CalculatorContainer">
        <input type="text" id="InputNumber" className="form-control fs-1 text-white text-end py-lg-5 py-sm-4" />
        <div className="row row-cols-4 container m-0 p-0">
          <this.BtnValues name={arr} />
        </div>
      </div>
    );
  }
}

export default Calculator;
