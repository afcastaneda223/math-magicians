/* eslint-disable class-methods-use-this */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [object, setObject] = useState({ total: '0', next: null, operation: null });

  const onChangeHandler = (event) => {
    const getForm = document.getElementById('InputNumber');
    let { total, next, operation } = calculate(object, event.target.name);

    if (total === undefined) {
      total = object.total;
    }
    if (next === undefined) {
      next = object.next;
    }
    if (operation === undefined) {
      operation = object.operation;
    }

    setObject({ total, next, operation });
    if (next) {
      getForm.value = next;
    } else if (total) {
      getForm.value = total;
    } else if (!total && !next && !operation) {
      getForm.value = null;
    }
    setObject({ total, next, operation });
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
    <div className="row">
      <div className="col-4">
        <h1>Lets do some math!</h1>
      </div>
      <div className="col-8">
        <input type="text" id="InputNumber" className="form-control fs-1 text-white text-end py-lg-4 py-sm-3" />
        <div className="row row-cols-4 container m-0 p-0">
          <BtnValues name={arr} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
