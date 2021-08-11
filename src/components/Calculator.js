import React from 'react';

export class Calculator extends React.Component {
  btnCLass = {
    grey: 'btn btn-light col py-4',
    orange: 'btn btn-warning col py-4',
    zero: 'btn btn-light col-6 py-4',
  }

  render() {
    return (
      <div className="container" id="CalculatorContainer">
        <input type="number" id="InputNumber" className="form-control fs-1 text-white text-end py-4" defaultValue="0" />
        <div className="row row-cols-4 container m-0 p-0">
          <button type="button" className={this.btnCLass.grey}>AC</button>
          <button type="button" className={this.btnCLass.grey}>+/-</button>
          <button type="button" className={this.btnCLass.grey}>%</button>
          <button type="button" className={this.btnCLass.orange}>÷</button>
          <button type="button" className={this.btnCLass.grey}>7</button>
          <button type="button" className={this.btnCLass.grey}>8</button>
          <button type="button" className={this.btnCLass.grey}>9</button>
          <button type="button" className={this.btnCLass.orange}>x</button>
          <button type="button" className={this.btnCLass.grey}>4</button>
          <button type="button" className={this.btnCLass.grey}>5</button>
          <button type="button" className={this.btnCLass.grey}>6</button>
          <button type="button" className={this.btnCLass.orange}>-</button>
          <button type="button" className={this.btnCLass.grey}>1</button>
          <button type="button" className={this.btnCLass.grey}>2</button>
          <button type="button" className={this.btnCLass.grey}>3</button>
          <button type="button" className={this.btnCLass.orange}>+</button>
          <button type="button" className={this.btnCLass.zero}>0</button>
          <button type="button" className={this.btnCLass.grey}>.</button>
          <button type="button" className={this.btnCLass.orange}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
