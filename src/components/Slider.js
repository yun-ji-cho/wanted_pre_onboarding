import React, {Component} from 'react';

class Slider extends Component {
  state = {
    initialMousePosX :0,
    offsetX :0,
    percentage : 1,
    controllerXpos : 0,
  };

  isDragging = (e) => {
    this.setState({initialMousePosX : e.clientX - this.state.offsetX});
    document.addEventListener('mousemove', this.isMoving); 
  }
  isMoving = (e) => {
    console.log(e.clientX);
    this.setState({offsetX : e.clientX - this.state.initialMousePosX});
    
  }
  // document.addEventListener('mouseup', () => {
  //   document.removeEventListener('mousemove', move);
  // })
  // removeMoving = (e) => {
  //   console.log('끝');
  // }



  render(){
    return (
      <div className="slider_container">
        <div className="percent_box">
          <span className="number">{this.state.percentage}</span>
        </div>
        <div className="inner">
          <div className="progress">
            <span className="spot_1">1%</span>
            <span className="spot_25">25%</span>
            <span className="spot_50">50%</span>
            <span className="spot_75">75%</span>
            <span className="spot_100">100%</span>
            <button className="controller" onMouseDown={this.isDragging}>move</button>
          </div>
          <div className="percent">
            <span className="spot_1">1%</span>
            <span className="spot_25">25%</span>
            <span className="spot_50">50%</span>
            <span className="spot_75">75%</span>
            <span className="spot_100">100%</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Slider;