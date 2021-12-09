import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './comments/Comment.jsx';
import Button from './button/Button';

ReactDOM.render(
  <React.StrictMode>
    <Comment className = 'comments'/>
    <Button className='button'/>
  </React.StrictMode>,
  document.getElementById('root')
);



