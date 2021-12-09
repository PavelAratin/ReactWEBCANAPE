import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'react-uuid';
import Comment from './comments/Comment.jsx';
import Button from './button/Button';
const comment = [
  {
    id: uuid(),
    date: new Date(),
    text: 'Комментарий1',
    author: {
      name: 'Павел1',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
    visible: true,
  },
  {
    id: uuid(),
    date: new Date(),
    text: 'Коментарий2',
    author: {
      name: 'Павел2',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
    visible: true,
  },
  {
    id: uuid(),
    date: new Date(),
    text: 'Коментарий3',
    author: {
      name: 'Павел3',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
    visible: false,
  }
];

ReactDOM.render(
  <React.StrictMode>
    <Comment comment={comment} className = 'comments'/>
    <Button comment={comment} className='button'/>
  </React.StrictMode>,
  document.getElementById('root')
);



