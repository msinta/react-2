import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrease = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div>
        <div class="container">
        <div class="row">
          <div class="col-">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div class="col-">
            <button
              onClick={this.handleIncrement}
              className="btn btn-secondary btn-sm"
            >
              +
            </button>

            <button
              onClick={this.handleDecrease}
              className="btn btn-secondary btn-sm"
              disabled={this.state.value === 0}
            >
              -
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm"
            >
              X
            </button>
          </div>
        </div>
      </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-1 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
