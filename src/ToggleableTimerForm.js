import React, { Component } from 'react';
import TimerForm from './TimerForm';

export default class ToggleableTimerForm extends Component {
  state = {
    isOpen: false,
  };

  handleFormeOpen = () => {
    this.setState({ isOpen: true })
  };

  handleFormClose = () => {
    this.setState({ isOpen: false });
  };

  handleFormSubmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.setState({ isOpen: false });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <TimerForm
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose} />
      );
    } else {
      return (
        <div className='ui basic content center aligned segment'>
          <button
            className='ui basic button icon'
            onClick={this.handleFormeOpen}>
            <i className='plus icon' />
          </button>
        </div>
      );
    }
  }
}