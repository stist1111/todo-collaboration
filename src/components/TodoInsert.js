import React, { Component } from "react";
import { MdAdd } from "react-icons/md";
import "../TodoInsert.scss";

export default class TodoInsert extends Component {
  render() {
    return (
      <form className="TodoInsert">
        <input placeholder="할 일을 입력하세요" />
        <button type="submit">
          <MdAdd />
        </button>
      </form>
    );
  }
}
