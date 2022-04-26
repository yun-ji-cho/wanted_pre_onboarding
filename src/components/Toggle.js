import React, {Component} from 'react';

class Toggle extends Component {
  state = {
    activeTarget : 'focus_left'
  };

  onChangeToggle = (e) => {
    if(e.target === e.currentTarget) return;
    const targetElemClass = e.target.className;
    if(this.state.activeTarget === 'focus_left' && targetElemClass !== 'left') this.setState({activeTarget : 'focus_right'});
    else if(this.state.activeTarget === 'focus_right' && targetElemClass !== 'right')this.setState({activeTarget : 'focus_left'});
  };

  render(){
    return (
      <ul className={`toggle_container ${this.state.activeTarget}`} onClick={this.onChangeToggle}>
        <li className="left">
          기본
        </li>
        <li className="right">
          상세
        </li>
      </ul>
    )
  }
}

export default Toggle;