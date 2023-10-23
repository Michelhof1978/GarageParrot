import React, { Component } from "react";

class Etoile extends Component {
  handleEtoileClick = () => {
    this.props.onEtoileClick(this.props.numero);
  };

  render() {
    const { selected } = this.props;
    return (
      <span
        className={`etoile ${selected ? "selected" : ""}`}
        onClick={this.handleEtoileClick}
      >
        ★
      </span>
    );
  }
}

export default Etoile;
