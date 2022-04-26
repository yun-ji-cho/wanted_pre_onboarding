import React from 'react';
const {useState} = React;

const Tab = () => {
  const [activeEl, setActiveEl] = useState(0);
  const [sliderLeft, setSliderLeft] = useState(0);

  const tabClickControl = (e) => {
    if(e.target === e.currentTarget) return;
    const $activeElem = e.target.dataset.num;
    const $tabSlider = document.querySelector('.tab_slider');

    document.querySelector('.tab_container button.active').classList.remove('active');
    e.target.classList.add('active');
    setActiveEl($activeElem);
    $tabSlider.style.left = `${33.33 * activeEl}% `;

  };


  return(
    <div className="tab_container">
      <div className="button_wrap" onClick={tabClickControl}>
        {['감자', '고구마', '카레라이스'].map((v,i) => <button type="button" 
        className={`${activeEl === i ? 'active' : ''}`} key={v} data-num={i}>{v}</button>)}
        <div className="tab_slider" style="left:0;"></div>
      </div>
    </div>
  )
};

export default Tab;