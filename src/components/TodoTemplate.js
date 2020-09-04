import React, { Component } from "react";
import "../TodoTemplate.scss";

export default class TodoTemplate extends Component {
  render() {
    return (
      <div className="TodoTemplate">
        <div className="app-title">일정관리</div>
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}
