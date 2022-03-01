import React from 'react';
import './App.css';
import Overview from './components/Overview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeletion = this.handleDeletion.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!e.target[0].value) return;
    const newTasks = this.state.tasks.slice();
    newTasks.push({
      name: e.target[0].value,
      id: (new Date()).getTime(),
    });
    this.setState({
      tasks: newTasks
    });
    e.target.reset();
  }

  handleDeletion(id) {
    const taskToDelete = this.state.tasks.find((element => element.id === id));
    const index = this.state.tasks.indexOf(taskToDelete);
    let newTasks = this.state.tasks.slice();
    if (index !== -1) {
      newTasks.splice(index, 1);
    }
    this.setState({
      tasks: newTasks
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='add task...'></input>
          <button type='submit'>submit</button>
        </form>
        <Overview
          tasks={this.state.tasks}
          deleteFn={this.handleDeletion}
        />
      </div>
    );
  }
}

export default App;
