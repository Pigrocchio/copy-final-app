import React, { Component } from "react";

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderValue: 0
    };
  }

  // for actualize the values of the slider, put the setState inside function.
  // What this does is make sure that this.props.handlerFromParant only gets 
  // called after the state has actually updated and been rendered.
  //     It's for this specific reason that setState has an optional callback
  onChange = e => {
    this.setState({ sliderValue: e.target.value }, function() {    
      this.props.handlerFromParant(this.state.sliderValue);
    });
  };

  render() {
    return (
      <div>
        <span class="range-slider__value">KM: {this.state.sliderValue}</span>
        <input className="range-slider__range" type="range" value={this.state.sliderValue} min="0" max="500" onChange={this.onChange.bind(this)} />
      </div>
    );
  }
}

export default Slider;
