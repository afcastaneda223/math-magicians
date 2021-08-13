/* eslint-disable class-methods-use-this */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [object, setObject] = useState({ total: null, next: null, operation: null });

  const onChangeHandler = (event) => {
    const getForm = document.getElementById('InputNumber');
    const obj = calculate(object, event.target.name);

    if (obj.total === undefined) {
      obj.total = object.total;
    }
    if (obj.next === undefined) {
      obj.next = object.next;
    }
    if (obj.operation === undefined) {
      obj.operation = object.operation;
    }

    setObject(obj);
    if (obj.next) {
      getForm.value = obj.next;
    } else if (obj.total) {
      getForm.value = obj.total;
    } else if (!obj.total && !obj.next && !obj.operation) {
      getForm.value = null;
    }
    return true;
  };

  const BtnValues = (element) => {
    const arr = [];
    element.name.forEach((ele) => {
      let btnConst = '0';
      if (ele === '0') {
        btnConst = <button type="button" name={ele} onClick={onChangeHandler} key={ele} className="btn btn-light col-6 py-lg-5 py-sm-4">{ele}</button>;
      } else if (ele === '÷' || ele === 'x' || ele === '-' || ele === '+' || ele === '=') {
        btnConst = <button type="button" name={ele} onClick={onChangeHandler} key={ele} className="btn btn-warning col py-lg-5 py-sm-4">{ele}</button>;
      } else {
        btnConst = <button type="button" name={ele} key={ele} onClick={onChangeHandler} className="btn btn-light col py-lg-5 py-sm-4">{ele}</button>;
      }
      arr.push(btnConst);
    });
    return arr;
  };

  const arr = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  return (
    <div className="container" id="CalculatorContainer">
      <input type="text" id="InputNumber" className="form-control fs-1 text-white text-end py-lg-5 py-sm-4" />
      <div className="row row-cols-4 container m-0 p-0">
        <BtnValues name={arr} />
      </div>
    </div>
  );
};

export default Calculator;
