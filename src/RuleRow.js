import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  render() {
    let ruleRowStatus =
      this.props.score === undefined ? "RuleRow-active" : "RuleRow-disabled";
    return (
      <tr
        className={`RuleRow ${ruleRowStatus}`}
        onClick={this.props.score === undefined ? this.props.doScore : null}
      >
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    );
  }
}

export default RuleRow;
