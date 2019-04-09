import React, { Component } from 'react';

import Timer from './Timer';
import TimerForm from './TimerForm';

export default class EditableTimer extends Component {
  state = {
    editformOpen: false
  };

  handleEditClick = () => {
    this.openForm();
  };

  handleFormClose = () => {
    this.closeForm();
  };

  handleSubmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.closeForm();
  };

  closeForm = () => {
    this.setState({ editFormOpen: false });
  };

  openForm = () => {
    this.setState({ editFormOpen: true });
  };

  render() {
    if (this.state.editFormOpen) {
      return (
        <TimerForm
          id={this.props.id}
          project={this.props.project}
          title={this.props.title}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose} />
      );
    } else {
      return (
        <Timer
          id={this.props.id}
          elapsed={this.props.elapsed}
          project={this.props.project}
          title={this.props.title}
          runningSince={this.props.runningSince}
          onEditClick={this.handleEditClick}
          onTrashClick={this.props.onTrashClick}
          onStartClick={this.props.onStartClick}
          onStopClick={this.props.onStopClick} />
      );
    }
  }
}