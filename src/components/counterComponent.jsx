import React, { Component } from "react";

const product = { id: 1 };
// products id to be passed into the event handlers

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
        {this.renderTags()}
      </div>
    );
  }

  handleIncrement = (product) => {
    this.setState({ count: this.state.count + 1 });
    console.log(`Increment clicked: ${product}`); // note this event handlers refrenced was just added to button property it wass not called as a function.
  };

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>there are no tags!</p>;
    } else
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
