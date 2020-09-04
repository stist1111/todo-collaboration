import React, { Component } from "react";
import TodoListItem from "./TodoListItem";
import "../TodoList.scss";

export default class TodoList extends Component {
  render() {
    return (
      <div className="TodoList">
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
      </div>
    );
  }
}
