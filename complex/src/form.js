import React from "react";

import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText
} from "reactstrap";

export default class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      valid: "",
      name: ""
    };
  }

  onChangeNumber = e => {
    this.setState({ number: e.target.Value });
    console.log(e.target.Value);

    this.submitToParent();
  };
  onChangeName = e => {
    this.setState({ name: e.target.Value });
    console.log(e.target.Value);
    this.submitToParent();
  };
  onChangeValue = e => {
    this.setState({ valid: e.target.Value });
    this.submitToParent();
  };
  submitToParent = () => {
    let obj = {
      name: this.state.name,
      valid: this.state.valid,
      number: this.state.number
    };
    console.log("obj////:" + obj);
    this.props.getData(obj);
  };

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="examplePassword">Number:</Label>
          <Input
            type="text"
            name=""
            id=""
            placeholder=" "
            value={this.state.number}
            onChange={this.onChangeNumber}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Name:</Label>
          <Input
            type="text"
            name=""
            id=""
            placeholder=""
            value={this.state.name}
            onChange={this.onChangeName}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">ValidThru:</Label>
          <Input
            type="text"
            name=""
            id=""
            placeholder=""
            value={this.state.valid}
            onChange={this.onChangeValid}
          />
        </FormGroup>
      </Form>
    );
  }
}
