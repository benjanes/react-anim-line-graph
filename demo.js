import React from 'react';
import ReactDOM from 'react-dom';

import { AnimLineGraph, AnimLineGraphXAxis, AnimLineGraphYAxis } from './dist';

const myData = {
  line1 : [ 20, 40, 25, 60, 23 ],
};

ReactDOM.render(
  <AnimLineGraph data={myData} >
    <AnimLineGraphXAxis />
    <AnimLineGraphYAxis />
  </AnimLineGraph>, 
  document.getElementById('root')
);
