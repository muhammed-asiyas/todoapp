import React from "react";

function TodoItem({ todo, deleteTodo }) {
  return (
    <div style={styles.item}>
      <p>{todo.text}</p>
      <button onClick={() => deleteTodo(todo._id)}>Delete</button>
    </div>
  );
}

const styles = {
  item: {
    display: "flex",
    justifyContent: "space-between",
    background: "#ebafafff",
    padding: "10px",
    margin: "5px 0"
  }
};

export default TodoItem;
