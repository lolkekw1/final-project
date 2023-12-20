import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram, faVk } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Footer = () => {
  const informationContent = (
    <div>
      <h3>Информация</h3>
      <p>Обратная связь: nnayapochta@gmail.com</p>
    </div>
    
  );

  const socialLinks = [
    { icon: faTelegram, link: 'https://youtu.be/dQw4w9WgXcQ?si=KFHtwE0ZQmZVWnnJ' },
    { icon: faInstagram, link: 'https://youtu.be/BbeeuzU5Qc8?si=zu5-re_332qJCYNe' },
    { icon: faVk, link: 'https://youtu.be/TJ-CmAwaIkU?si=GSWz8vv_8h1t8bch' },
  ];
  

  return (
    <footer className="footer-container">
      <div className="comment-section">
        {informationContent}
      </div>
      
      <div className="social-section">
        <h3>Мы в социальных сетях</h3>
        <div className="social-icons">
  {socialLinks.map((social) => (
    <a key={social.link} href={social.link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={social.icon} size="2x" />
    </a>
  ))}
</div>
      </div>
    </footer>
  );
};

export default Footer;
