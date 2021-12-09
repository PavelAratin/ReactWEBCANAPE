import React from 'react';
import uuid from 'react-uuid';
import './Button.scss';

function func(arg) {
  console.log(arg)
}

function Button(props) {
  // console.log(props.comment)
  function func(props) {
  const vcommentItems = props.comment.map(function (commentItem) {
   console.log(commentItem)
  })
}
  return (
    <button onClick={() => func(props)}  className={props.className}>Показать скрытый комментарий</button>
  )
}

export default Button;

