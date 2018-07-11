import React, { Component } from 'react';
import chunk from 'lodash/chunk';
import flatten from 'lodash/flatten';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.state = {
      data: [],
      currentGroup: 0,
      max: null
    }
  }
  componentDidMount() {
    let {data} = this.props;
    const parts = 4;
    const selectedItems = data.length % parts * -1 ? data.slice(0, data.length % parts * -1) : data;
    this.setState({ data: chunk(selectedItems, parts), max: selectedItems.length / parts});
    setTimeout(() => {
      const slides = this.slides.querySelectorAll(".slide");
      slides.forEach(slide => {
        slide.classList.remove('fade-out')
      })
    }, 1)
  }


  handleUpdate(direction = "next") {
    const {currentGroup, max} = this.state;
    const {delay} = this.props;
    let next = currentGroup + 1 < max ? currentGroup + 1 : 0;
    if(direction === 'prev') {
      next = currentGroup - 1 === -1 ? max - 1 : currentGroup - 1;
    }
    const slides = this.slides.querySelectorAll('.slide');
    slides.forEach((slide) => {
      slide.classList.add('fade-out');
    })
    setTimeout(() => {
        this.setState({ currentGroup: next })
        const slides = Array.from(this.slides.querySelectorAll('.slide'));

        if(direction === 'prev') {
          slides.reverse();
        }

        slides.forEach((slide, index) => {
          setTimeout(() => {
            slide.classList.remove('fade-out')
          }, delay * index);
        })
    }, delay + 1)
  }

  render() {
    const {data, currentGroup} = this.state;
    return <div className="App">
        <h1>Step Slider</h1>
        <div className="slider">
          <div className="slider-inner" ref={el => (this.slides = el)}>
            {data.length ? data[currentGroup].map(item => (
              <div
                key={item.id}
                className="slide fade-out"
                style={{
                  transitionDuration: `${this.props.delay}ms`
                }}
              >
                <img src={item.image} alt="" />
                <p>{item.id}</p>
              </div>
            )) : null}
          </div>
          <div className="mobileSlider">
            {data.length ? flatten(data).map(item => (
            <div
              key={item.id}
              className="slide"
              style={{
                transitionDuration: `${this.props.delay}ms`
              }}
            >
              <img src={item.image} alt="" />
              <p>{item.id}</p>
            </div>
            )) : null}
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <button onClick={() => this.handleUpdate('prev')}>Prev</button>
            <button onClick={this.handleUpdate}>Next</button>
          </div>
        </div>
      </div>;
  }
}

export default App;
