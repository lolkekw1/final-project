import React, { useState } from 'react';
import './main.css';

const Main = () => {
  const newChapters = [
    { id: 1, title: 'Я стала слугой тирана', image: '/images/chapter1.jpg', chapterNumber: 21 },
    { id: 2, title: 'В ловушке', image: '/images/chapter2.jpg', chapterNumber: 27 },
    { id: 3, title: 'Майя-сан ведьма!', image: '/images/chapter3.jpg', chapterNumber: 22 },
  ];

  const [comments, setComments] = useState([
    { user: '✨david✨', text: 'Панацея моей души. Если бы могла, то я бы ввела это себе в кровь, что бы моё сердце могло чаще биться в таком счастливом ритме' },
    { user: 'Alone10', text: 'Раньше обожала эту манхву, но из-за нехватки динамики не могу заставить себя читать дальше😭 Брошено.. прости меня, ты была моим фавором' },
  ]);

  const [newComment, setNewComment] = useState('');

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, { user: 'Новый пользователь', text: newComment }]);
      setNewComment('');
    }
  };

  return (
    <div>
      <h1>Главная</h1>
      <p>Добро пожаловать на ReManga!</p>

      <div>
        <h2>Новые главы</h2>
        <div className="chapter-container">
          {newChapters.map((chapter) => (
            <div key={chapter.id} className="chapter-item">
              <div className="chapter-number-wrapper">
                <p className="chapter-subtitle">{`Глава ${chapter.chapterNumber}`}</p>
              </div>
              <img src={chapter.image} alt={`Глава ${chapter.chapterNumber}`} className="chapter-image" />
              <div className="chapter-info">
                <p className="chapter-title">{chapter.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="comment-section">
        <h2>Комментарии</h2>

        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <img src={`avatars/avatar${index + 1}.jpg`} alt={`User Avatar ${index + 1}`} className="avatar" />
            <div className="comment-content">
              <p><strong>{comment.user}:</strong> {comment.text}</p>
            </div>
          </div>
        ))}

        <div className="comment new-comment">
          <img src={`avatars/avatar3.jpg`} alt="User Avatar" className="avatar" />
          <div className="comment-content">
            <textarea
              placeholder="Добавьте свой комментарий..."
              value={newComment}
              onChange={handleInputChange}
            />
            <button onClick={handleAddComment}>Добавить комментарий</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
