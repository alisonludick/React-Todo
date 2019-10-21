import React from "react";

// tasks
// 1. add constructor with state that has itemName
// 2. on input add a value attribute and pass new state property
// 3. build a handleChanges action handler that will update the new state
// 4. dont forget onChange

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      itemName: ""
    };
  }
  handleChanges = e => {
    // update state with each keystroke
    this.setState({ itemName: e.target.value });
    console.log(this.state.itemName);
  };

  handleSubmit = e => {
    this.props.addItem(e, this.state.itemName);
    this.setState({ itemName: "" });
  };
  // class property to submit form

  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          task="item"
          value={this.state.itemName}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;