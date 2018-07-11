import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const data = [
  { image: "https://picsum.photos/300/300?image=100", id:1},
  { image: "https://picsum.photos/300/300?image=101", id:2},
  { image: "https://picsum.photos/300/300?image=102", id:3},
  { image: "https://picsum.photos/300/300?image=103", id:4},
  { image: "https://picsum.photos/300/300?image=104", id:5},
  { image: "https://picsum.photos/300/300?image=199", id:6},
  { image: "https://picsum.photos/300/300?image=112", id:7},
  { image: "https://picsum.photos/300/300?image=107", id:8},
  { image: "https://picsum.photos/300/300?image=108", id:9},
  { image: "https://picsum.photos/300/300?image=109", id:10},
  { image: "https://picsum.photos/300/300?image=110", id:11},
  { image: "https://picsum.photos/300/300?image=111", id:12},
];

ReactDOM.render(<App data={data} delay={100} />, document.getElementById('root'));
registerServiceWorker();
