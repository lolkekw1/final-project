import React from 'react';
import './News.css';

const newsData = [
  {
    id: 1,
    title: 'Вышла шестнадцатая книга манги "One Piece"',
    image: 'news-image/1.jpg',
    text: 'Издательство Азбука получило из типографии 16 книгу манги "One Piece".',
    link: 'https://readmanga.live/news/show_vyshla_shestnadcataia_kniga_mangi__one_piece_',
  },
  {
    id: 2,
    title: 'Вышла первая книга комикса "Аделаида"',
    image: 'news-image/2.jpg',
    text: 'Издательство Эксмо Freedom получило из типографии 1 книгу комикса "Аделаида".',
    link: 'https://readmanga.live/news/show_vyshla_pervaia_kniga_komiksa_adelaida',
  },
  {
    id: 3,
    title: 'Вышла шестнадцатая книга манги "Моя геройская академия"',
    image: 'news-image/3.jpg',
    text: 'Издательство Азбука получило из типографии 16 книгу манги "Моя геройская академия".',
    link: 'https://readmanga.live/news/show_vyshla_shestnadcataia_kniga_mangi__moia_geroiskaia_akademiia_',
  },
  {
    id: 4,
    title: 'Вышел ворой том манхвы "Я стала матерью главного героя"',
    image: 'news-image/4.jpg',
    text: 'Издательство АСТ получило из типографии 2 том манхвы "Я стала матерью главного героя".',
    link: 'https://readmanga.live/news/show_vyshel_voroi_tom_manhvy__ia_stala_materiu_glavnogo_geroia_',
  },
];

const News = () => {
  return (
    <div>
      <h2>Последние новости</h2>
      <div className="news-container">
        {newsData.map((news) => (
          <a key={news.id} href={news.link} target="_blank" rel="noopener noreferrer" className="news-link">
            <div className="news-item">
              <img src={news.image} alt={news.title} className="news-image" />
              <div className="news-content">
                <h3>{news.title}</h3>
                <p>{news.text}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default News;