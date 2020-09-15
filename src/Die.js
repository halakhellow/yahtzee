import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numbers: ["one", "two", "three", "four", "five", "six"],
    val: 4,
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    let classes = `Die fas fa-dice-${
      this.props.numbers[this.props.val - 1]
    } fa-5x`;
    if (this.props.locked) classes += " Die-locked";
    if (this.props.isRolling) classes += " Die-rolling";
    return (
      <i
        className={classes}
        onClick={this.handleClick}
        disabled={this.props.disabled}
      />
    );
  }
}

export default Die;
