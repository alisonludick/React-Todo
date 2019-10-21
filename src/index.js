import React from "react";
import ReactDOM from "react-dom";

import TodoList from "./components/TodoList";
import ListForm from "./components/ListForm";
import "./styles.css";

const todolist = [
  {
    task: "Fetch dry-cleaning",
    id: 123,
    completed: false
  },
  {
    task: "Make bed",
    id: 124,
    completed: false
  },
  {
    task: "Feed pets",
    id: 1235,
    completed: false
  },
  {
    task: "Hang laundry",
    id: 1246,
    completed: false
  },
  {
    task: "Drink water",
    id: 1237,
    completed: false
  },
  {
    task: "Make bed",
    id: 1248,
    completed: false
  }
];

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      todolist // todolist: todolist
    };
  }

  // Class methods to update state
  //toggleItem(itemId) {
  //}

  addItem = (e, itemName) => {
    e.preventDefault();
    const existing = this.state.todolist.filter(
      item => item.task === itemName
    );
    if (existing.length === 0) {
      const newItem = {
        task: itemName,
        id: Date.now(),
        completed: false
      };
      this.setState({
        todolist: [...this.state.todolist, newItem]
      });
    }
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todolist: this.state.todolist.filter(item => !item.completed)
    });
  };

  toggleItem = itemId => {
    console.log("index.js: App: toggleItem: ", itemId);
    console.log("index.js: App: this.state: ", this.state);
    //this.state.todolist;
    this.setState({
      todolist: this.state.todolist.map(item => {
        if (item.id === itemId) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    });
  };

  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List:</h1>
          <ListForm addItem={this.addItem} />
        </div>
        <TodoList
          todolist={this.state.todolist}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);