import React, { Component } from "react";
import puce from "./puce.png";
import CardForm from "./form";
import "./App.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "•••• •••• •••• ••••",
      valid: "/",
      name: ""
    };
  }
  getNumber = n => {
    let num = n.replace(/ /g, "");

    console.log(num);
    let ch = [];
    let j = 0;
    for (let i = 0; i < num.length; i++) {
      if (i == 4 || i == 8 || i == 12) {
        ch[j] = " ";
        j++;
      }
      ch[j] = num[i];
      j++;
    }
    if (ch.length < 19) {
      for (let k = ch.length; k < 19; k++) {
        if (k == 5 || k == 10 || k == 15) {
          ch[k] = " ";
        }
        ch[k + 1] = "•";
      }
    }
    this.setState({
      number: ch
    });
  };
  getValid = val => {
    let num = val.replace(/\//g, "");
    if (num.length <= 2) {
      this.setState({
        valid: val + "/"
      });
    } else {
      this.setState({
        valid: val
      });
    }
  };
  getName = name => {
    this.setState({
      name: name
    });
  };

  render() {
    return (
      <div className="d-flex mt-3" style={{ height: "280px" }}>
        <div className="card mx-3">
          <p className="title">Company name</p>
          <div className="  d-flex">
            <div className="content ">
              <img className="ml-3 " width="50" height="40" src={puce} />
              <p className="number mt-2">{this.state.number}</p>
              <p className="valid mt-3">{this.state.valid}</p>
              <p className="name mt-3">{this.state.name}</p>
            </div>
            <div className="h-100 d-flex flex-column justify-content-end">
              <img
                className=""
                width="100px"
                height="60px"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png"
              />
            </div>
          </div>
        </div>
        <div className="form  h-100 d-flex flex-column justify-content-center ">
          <CardForm
            getNumber={this.getNumber}
            getName={this.getName}
            getValid={this.getValid}
          />
        </div>
      </div>
    );
  }
}

export default Card;
