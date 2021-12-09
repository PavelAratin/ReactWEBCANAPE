import React from 'react';
import './Button.scss';

function func(arg) {
  console.log(arg)
}

function Button(props) {
  console.log(props.visibleComment)
  return(
    <button onClick={() => func('React')} className = {props.className}>Показать скрытый комментарий</button>
  )
}

export default Button;