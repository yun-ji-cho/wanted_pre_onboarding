import React, {useState} from 'react';

const ToggleFun = () =>  {
  const [activeTarget, setActiveTarget] = useState('');

  const onChangeToggle = (e) => {
    if(e.target === e.currentTarget) return;
    
    const targetClassName = e.target.className;
    if(!activeTarget && targetClassName !== 'left') setActiveTarget('switch');
    else if(activeTarget && targetClassName !== 'right') setActiveTarget('');
  };

  
  return (
    <ul 
      className={`toggle_container ${activeTarget}`} onClick={onChangeToggle}
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

export default ToggleFun;