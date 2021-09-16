import "./todo.scss";
import React, { useState } from "react";
import { Flare } from "@material-ui/icons";
import TodoInput from "../todoInput/TodoInput";
import TodoList from "../todoList/TodoList";
import image from "../../images/bg-desktop-dark.jpg";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="bg">
      <img className="top" src={image} alt="" srcset="" />
      <div className="todo-container">
        <div className="todo">
          <h1>TODO</h1>
          <Flare />
        </div>

        <TodoInput onSubmit={addTodo} />
        <TodoList
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
};

export default Todo;
