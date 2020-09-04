import React, { Component } from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import "../TodoListItem.scss";

export default class TodoListItem extends Component {
  render() {
    return (
      <div className="TodoListItem">
        <div className="checkbox">
          <MdCheckBoxOutlineBlank />
          <div className="text">할 일</div>
        </div>
        <div className="remove">
          <MdRemoveCircleOutline />
        </div>
      </div>
    );
  }
}
