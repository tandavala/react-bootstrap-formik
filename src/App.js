import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";

const Contaier = styled.div`
  background: #f7f9fa;
  height: 90%;
  margin: 4em auto;
  color: snow;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

  @media (min-width: 786px) {
    width: 60%;
  }
  label {
    color: #24b9b6;
    font-size: 1.2rem;
    font-weight: 400;
  }
  h1 {
    color: #24b9b6;
    padding-top: 0.5em;
  }
  .form-group {
    margin-bottom: 2.5em;
  }
`;

const MyForm = styled(Form)`
  width: 90%;
  text-align: left;
  padding-top: 2em;
  padding-bottom: 1.2em;

  @media (min-width: 786px) {
    width: 50%;
  }
`;
const MyButton = styled(Button)`
  background: #1863ab;
  border: none;
  font-size: 1em;
  font-weight: 400;

  &:hover {
    background: #1d3461;
  }
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Contaier>
        <MyForm className="mx-auto">
          <Form.Group controlId="formName">
            <Form.Label>Name: </Form.Label>
            <Form.Control type="txt" name="name" placeholder="Full name" />
          </Form.Group>
          <Form.Group controlId="formPhone">
            <Form.Label>Name: </Form.Label>
            <Form.Control type="text" name="phone" placeholder="Your phone" />
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Name: </Form.Label>
            <Form.Control type="text" name="blog" placeholder="Your blog" />
          </Form.Group>
          <Form.Group controlId="formName">
            <MyButton variant="primary">Submint</MyButton>
          </Form.Group>
        </MyForm>
      </Contaier>
    </div>
  );
}

export default App;
