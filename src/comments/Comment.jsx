
import React from 'react';
import uuid from 'react-uuid';
import './Comments.scss';

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  const newComent = props.comment.map(function (commentator, id) {
    let show = commentator.visible
    return (
      <div>
        {show ?
          <div key={id} visible={commentator.visible} className="comments__comment">
            <div className="comments__img">Ава комментатора:<img src={commentator.author.avatarUrl}></img></div>
            <div className="comments__name">Имя комментатора:{commentator.author.name}</div>
            <div className="comments__text">Текст комментария:{commentator.text}</div>
            <div className="comments__date">Дата комментария:{formatDate(commentator.date)}</div>
          </div>
          : "Комментарий не одобрен модератором"}
      </div>
    )
  })
  return (
    <section className = {props.className}>
      {newComent[0]}
      {newComent[1]}
      {newComent[2]}
    </section>
  )
}

export default Comment;



