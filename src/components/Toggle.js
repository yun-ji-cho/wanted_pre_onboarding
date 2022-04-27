import React, {Component} from 'react';

class Toggle extends Component {
  state = {
    activeTarget : '',
  };

  onChangeToggle = (e) => {
    if(e.target === e.currentTarget) return;
    
    const targetClassName = e.target.className;
    if(!this.state.activeTarget && targetClassName !== 'left') this.setState({activeTarget : 'switch'});
    else if(this.state.activeTarget && targetClassName !== 'right')this.setState({activeTarget : ''});
  };

  render(){
    return (
      <ul 
        className={`toggle_container ${this.state.activeTarget}`} onClick={this.onChangeToggle}
      >
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