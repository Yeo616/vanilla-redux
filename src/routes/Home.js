import React, { useState } from "react";
import { connect } from "react-redux";
import Todo from "../components/ToDo";
import { add } from "../store";

function Home({ toDos, addTodo }) {
  // we are creating props

  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addTodo(text);
    console.log(text);
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
        <ul>
          {toDos.map((toDo) => (
            <Todo {...toDo} key={toDo.id} />
          ))}
        </ul>
      </form>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return { addTodo: (text) => dispatch(add(text)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
//
