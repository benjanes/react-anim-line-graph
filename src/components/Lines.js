import React, { Component } from 'react';

const axisStyle = {
  stroke: '#000',
  strokeLinecap: 'round'
};

export default class Lines extends Component {

  _renderLine(line) {
    return <path key={line.key} stroke="#FF0000" fill="none" d={line.d} />
  }

  render() {
    return (
      <g>
        <g id="anim-line-graph--lines">
          {this.props.lines.map(this._renderLine)}
        </g>
        <g>
          <path style={axisStyle} d="M 0 100 l 400 0" />
          <path style={axisStyle} d="M 0 0 l 0 100" />
        </g>
      </g>
    )
  }
}
