import React, { Component } from 'react';
import Lines from './Lines';

export class Graph extends Component {

  _transformData(data, direction, min, max) {
    return Object.keys(data).reduce((paths, lineTag) => {
      const path = data[lineTag].reduce((path, dataPt, idx, coll) => {
        if (!idx) {
          path.d += `${path.x} ${100 - dataPt}`;
          path.key = lineTag;
        } else {
          path.d += `C ${path.x - 20} ${100 - coll[idx - 1]} ${path.x - 20} ${100 - dataPt} ${path.x} ${100 - dataPt}`;
        }
        path.x += 40;
        return path;
      }, {d: 'M', x: 0});
      return paths.concat([path]);
    }, []);
  }

  _getLineKey(data) {
    return Object.keys(data);
  }

  _renderKey(prop) {
    return <h2 key={prop}>{prop}</h2>;
  }

  render() {

    return (
      <div>
        {/* render the graph */}
        <div className="anim-line-graph--container">
          {this._getLineKey(this.props.data).map(this._renderKey)}
          <svg width="100%" height="400" viewBox="-5 0 405 105" preserveAspectRatio="none">
            <Lines lines={this._transformData(this.props.data)} />
          </svg>
          {/* within graph container, render this.props.children */}
          {this.props.children}
        </div>
      </div>
    );
  }
}

Component.defaultProps = {
  direction: 'LTR',
  min: 0,
  max: 100,
};

