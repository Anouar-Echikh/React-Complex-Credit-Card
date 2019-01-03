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
    
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="examplePassword">Number:</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder=" "
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Name:</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder=""
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">ValidThru:</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder=""
          />
        </FormGroup>
      </Form>
    );
  }
}
