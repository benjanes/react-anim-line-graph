import React from 'react';
import ReactDOM from 'react-dom';

import { AnimLineGraph, AnimLineGraphXAxis, AnimLineGraphYAxis } from './dist';

ReactDOM.render(
  <AnimLineGraph>
    <AnimLineGraphXAxis />
    <AnimLineGraphYAxis />
  </AnimLineGraph>, 
  document.getElementById('root')
);
