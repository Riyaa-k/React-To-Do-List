import React, { Component } from 'react';
import "./style.css"
class Todo extends Component {
  constructor() {
    super();
    this.state = {
      list: "",
      listArray: [],
    };
  }

  itemEvent = (e) => {
    this.setState({ list: e.target.value });
  };

  handleList = () => {
    this.setState((prevState) => ({
      listArray: [...prevState.listArray, prevState.list],
      list: "",
    }));
  };

  deleteItems = (id) => {
    this.setState((prevState) => {
      const newArr = prevState.listArray.filter((item, index) => index !== id);
      return { listArray: newArr };
    });
  };

  render() {
    return (
      <div>
        <h1>To-do List</h1>
        <input
          type="text"
          placeholder="Add an item"
          value={this.state.list}
          onChange={this.itemEvent}
        />
        <button onClick={this.handleList}> + </button>

        <ol>
          {this.state.listArray.map((item, index) => (
            <div className="but" key={index}>
              <button onClick={() => this.deleteItems(index)}>Delete</button>
              <li>{item}</li>
            </div>
          ))}
        </ol>
      </div>
    );
  }
}

export default Todo;
