import React from 'react';
const {useState} = React;

const Tab = () => {
  const [activeEl, setActiveEl] = useState(0);
  const [focusPos, setFocusPos] = useState('focus_0');

  const tabClickControl = (e) => {
    if(e.target === e.currentTarget) return;
    const $activeElem = e.target.dataset.num;

    document.querySelector('.tab_container button.active').classList.remove('active');
    e.target.classList.add('active');
    setActiveEl($activeElem);
    setFocusPos(`focus_${$activeElem}`);
  };


  return(
    <div className="tab_container">
      <div className={`button_wrap ${focusPos}`} onClick={tabClickControl}>
        {['감자', '고구마', '카레라이스'].map((v,i) => <button type="button" 
        className={`${activeEl === i ? 'active' : ''}`} key={v} data-num={i}>{v}</button>)}
      </div>
    </div>
  )
};

export default Tab;