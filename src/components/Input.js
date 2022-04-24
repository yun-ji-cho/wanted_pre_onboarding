import React from 'react';
const { useState, useRef, memo } = React;

const Input = memo(() => {
  const [loginValue, setLoginValue]= useState({
    email:'',
    password: ''
  });

  const [emailCheck, setEmailCheck] = useState('');
  const [passwordView, setPasswordView] = useState({
    type : 'password',
    view : false,
  });
  const inputRef = useRef(null);

  const onChangeInput = (e) => {
    if(e.target.id === 'email') {
      setLoginValue({
        email : e.target.value,
        password: loginValue.password,
      });

      if(validateEmail(e.target.value)) setEmailCheck('checked');
      else setEmailCheck('');


    }else if(e.target.id === 'password'){
      setLoginValue({
        email : loginValue.email,
        password: e.target.value,
      });
    }
  };

  const validateEmail = (email) => {
    const re = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return re.test(email);
  }

  const onClickView = () => {
    if(passwordView.view) {
      setPasswordView({
        type : 'password',
        view : false,
      })
    }
    else setPasswordView({
      type : 'text',
      view : true,
    })
  };



  return(
    <form className="login_form">
      <label htmlFor="email">E-mail</label>
      <div className="input-box input_email">
        <input 
          type="text" 
          id="email" 
          ref={inputRef} 
          value={loginValue.email} 
          onChange={onChangeInput} 
          placeholder="E-mail"
        />
        <span className={`icon icon_check ${emailCheck}`}>check</span>
      </div>

      <label htmlFor="password">Password</label>
      <div className="input-box input_password">
        <input 
          id="password" 
          ref={inputRef} 
          value={loginValue.password} 
          type={passwordView.type}
          onChange={onChangeInput} 
          placeholder="Password"
        />
        <button 
          type="button" 
          className={`icon icon_view ${passwordView.view ? 'view' : ''}`}
          onClick={onClickView}
        >view</button>
      </div>
    </form>
    
  )
});

export default Input;