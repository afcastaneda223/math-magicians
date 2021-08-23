/* eslint-disable no-unused-vars */
import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Calculator from '../Calculator';
import Quote from '../Quote';
import Home from '../Home';
import Navbar from '../Navbar';

describe('Navbar', () => {
  it('Renders the Navbar', () => {
    const calculator = TestRenderer.create(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    ).toJSON();
    expect(calculator).toMatchSnapshot();
  });
});

describe('Home', () => {
  it('Renders the Home', () => {
    const home = TestRenderer.create(
      <Home />,
    ).toJSON();
    expect(home).toMatchSnapshot();
  });
});

describe('Calculator', () => {
  it('Renders the Calculator', () => {
    const calculator = TestRenderer.create(
      <Calculator />,
    ).toJSON();
    expect(calculator).toMatchSnapshot();
  });
});

describe('Quote', () => {
  it('Renders the Quote', () => {
    const quote = TestRenderer.create(
      <Quote />,
    ).toJSON();
    expect(quote).toMatchSnapshot();
  });
});
