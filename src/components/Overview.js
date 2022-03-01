import React from "react";

class DeleteBtn extends React.Component {
  render() {
    return(
      <button onClick={this.props.clickFn}>x</button>
    )
  }
}

class Overview extends React.Component {

  handleDelete(id) {
    this.props.deleteFn(id);
  }

  render() {
    const taskList = this.props.tasks.map(task => {
      return (
        <div key={task.id}>
          <span>{task.name}</span>
          <DeleteBtn clickFn={() => this.handleDelete(task.id)}/>
        </div>
      )}
    );
    return taskList;
  }
}

export default Overview;