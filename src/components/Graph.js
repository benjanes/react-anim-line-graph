import React, { Component } from 'react';

export class Graph extends Component {

  render() {
    return (
      <div>
        {/* render the graph */}
        <div className="anim-line-graph--container">
          <h1>Insert graph here</h1>

          {/* within graph container, render this.props.children */}
          {this.props.children}
        </div>
      </div>
    );
  }
}
