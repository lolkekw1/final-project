import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import ImageUploader from 'react-images-upload';
import 'react-quill/dist/quill.snow.css';
import './Profile.css';

const Profile = ({ loggedInUser, onLogout }) => {
  const [readMangaCount, setReadMangaCount] = useState(0);
  const [aboutMe, setAboutMe] = useState(loggedInUser ? loggedInUser.bio || '' : '');
  const [blogContent, setBlogContent] = useState('');
  const [wallPosts, setWallPosts] = useState([]);
  const [images, setImages] = useState([]);

  const handleMangaRead = () => {
    setReadMangaCount(readMangaCount + 1);
  };

  const handleAboutMeChange = (content) => {
    setAboutMe(content);
  };

  const handleBlogContentChange = (content) => {
    setBlogContent(content);
  };

  const handleBlogSubmit = () => {
    const newPost = {
      content: blogContent,
      timestamp: new Date().toISOString(),
    };
    setWallPosts([newPost, ...wallPosts]);
    setBlogContent('');
  };

  const handleImageUpload = (pictureFiles) => {
    setImages([...images, ...pictureFiles]);
  };

  return (
    <div className="profile-container">
      <h2>Профиль пользователя</h2>
      {loggedInUser ? (
        <div className="profile-content">
          <p>Добро пожаловать на ReManga, {loggedInUser.username}!</p>
          {loggedInUser.avatar && (
            <img
              src={loggedInUser.avatar}
              alt={`${loggedInUser.username}'s Avatar`}
              className="avatar"
            />
          )}
          <div className="about-me">
            <p>О себе:</p>
            <ReactQuill value={aboutMe} onChange={handleAboutMeChange} />
          </div>
          <p>Прочитанные манги: {readMangaCount}</p>
          <div className="wall">
            <p>Стена:</p>
            <div className="post-input">
              <ReactQuill value={blogContent} onChange={handleBlogContentChange} />
              <button onClick={handleBlogSubmit}>Опубликовать</button>
            </div>
            {wallPosts.map((post, index) => (
              <div key={index} className="post">
                <p>{post.timestamp}</p>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            ))}
          </div>

          <div className="image-upload">
            <p>Загрузка изображений:</p>
            <ImageUploader
              withIcon={true}
              buttonText="Выберите изображения"
              onChange={handleImageUpload}
              imgExtension={['.jpg', '.gif', '.png', '.jpeg']}
              maxFileSize={5242880}
            />
          </div>

          <button onClick={onLogout}>Выйти</button>
        </div>
      ) : (
        <p>Пожалуйста, войдите в свой аккаунт.</p>
      )}
    </div>
  );
};

export default Profile;
