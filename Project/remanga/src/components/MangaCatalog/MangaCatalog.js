import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MangaCatalog.css';

const MangaCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]); 
  const [isAllGenresVisible, setIsAllGenresVisible] = useState(false);
  const mangaList = [

    { id: 1, title: 'Взаправду Ерунда', cover: '/covers/cover1.jpg', genres: ['Комедия', 'Повседневность'] },
    { id: 2, title: 'Семья Шпиона', cover: 'covers/cover2.jpg', genres: ['Экшен', 'Комедия', 'Повседневность'] },
    { id: 3, title: 'Невероятные Приключения ДжоДжо', cover: 'covers/cover3.jpg', genres: ['Экшен', 'Приключения', 'Комедия', 'Боевик'] },
    { id: 4, title: 'Клинок, рассекающий демонов', cover: 'covers/cover4.jpg', genres: ['Экшен','Боевик', 'Боевые искусства', 'Драма', 'История', 'Комедия', 'Мистика', 'Приключения', 'Психология', 'Сверхъестественное'] },
    { id: 5, title: 'Моя геройская академия', cover: 'covers/cover5.jpg', genres: ['Экшен','Боевик', 'Драма', 'Комедия', 'Сёнэн', 'Фантастика', 'Школа', 'Зверолюди', 'Якудза', 'Полиция', 'Монстры', 'Будущее', 'Дружба'] },
    { id: 6, title: 'Волейбол!!', cover: 'covers/cover6.jpg', genres: ['Драма', 'Комедия', 'Повседневность', 'Сёнэн', 'Спорт', 'Школа', 'Дружба', 'Япония'] },
    { id: 7, title: 'Хоримия', cover: 'covers/cover7.jpg', genres: ['Комедия', 'Повседневность', 'Романтика', 'Сёнэн', 'Школа', 'Дружба', 'Япония'] },
    { id: 8, title: 'Очкарик-янки', cover: 'covers/cover8.jpg', genres: ['Драма', 'Повседневность', 'Романтика', 'Сёдзё', 'Школа', 'Дружба'] },
    { id: 9, title: 'Кот и поцелуй', cover: 'covers/cover9.jpg', genres: ['Комедия', 'Повседневность', 'Романтика', 'Сверхъестественное', 'Сёдзё', 'Волшебные существа'] },
    { id: 10, title: 'Я стала слугой тирана', cover: '/images/chapter1.jpg', genres: ['Драма', 'История', 'Романтика', 'Сёдзё', 'Средневековье', 'ГГ женщина', 'Воспоминания из другого мира', 'Амнезия', 'Империи', 'Фэнтези'] },
    { id: 11, title: 'В ловушке', cover: '/images/chapter2.jpg', genres: ['Комедия', 'Романтика', 'Школа', 'Брат и сестра', 'ГГ женщина'] },
    { id: 12, title: 'Майя-сан ведьма!', cover: '/images/chapter3.jpg', genres: ['Комедия', 'Повседневность', 'Сёнэн', 'ГГ женщина', 'Сёдзё', 'Фэнтези'] },
  
  ];

  const toggleAllGenres = () => {
    setIsAllGenresVisible((prevState) => !prevState);
  };

  const genres = [
'Все',
'Амнезия',
'Боевик',
'Боевые искусства',
'Брат и сестра',
'Будущее',
'Волшебные существа',
'Воспоминания из другого мира',
'Драма',
'Дружба',
'Зверолюди',
'Империи',
'История',
'Комедия',
'Мистика',
'Монстры',
'Повседневность',
'Полиция',
'Приключения',
'Психология',
'Романтика',
'Сверхъестественное',
'Сёдзё',
'Сёнэн',
'Спорт',
'Фантастика',
'Фэнтези',
'Экшен',
'Якудза',
'Япония'
];

const handleGenreChange = (genre) => {
  if (genre === 'Все') {
    setSelectedGenres([]);
  } else {
    setSelectedGenres((prevGenres) => {
      if (prevGenres.includes(genre)) {
        return prevGenres.filter((g) => g !== genre);
      } else {
        return [...prevGenres, genre];
      }
    });
  }
};

const genreColumns = [];
  const columnsCount = 5;
  for (let i = 0; i < genres.length; i += columnsCount) {
    genreColumns.push(genres.slice(i, i + columnsCount));
  }


  return (
    
    <div className="catalog-container">
      <h2>Каталог Манги</h2>

      <div className="filter-container">
        <div>
          <h4>Поиск</h4>
          <input
            type="text"
            placeholder="Поиск по названию"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="genre-filter">
          <h4>Фильтр по жанрам</h4>
          <button onClick={toggleAllGenres}>
            {isAllGenresVisible ? 'Скрыть все жанры' : 'Показать все жанры'}
          </button>
          
          <div className={`genre-columns ${isAllGenresVisible ? '' : 'hide-genres'}`}>
  {genreColumns.map((column, index) => (
    <ul key={index}>
      {column.map((genre) => (
        <li key={genre}>
          <label>
            <input
              type="checkbox"
              value={genre}
              checked={selectedGenres.includes(genre)}
              onChange={() => handleGenreChange(genre)}
            />
            {genre}
          </label>
        </li>
      ))}
    </ul>
  ))}
</div>
        </div>
      </div>

      <ul className="manga-list">
        {mangaList
          .filter(
            (manga) =>
              (selectedGenres.length === 0 ||
                selectedGenres.every((selectedGenre) => manga.genres.includes(selectedGenre))) &&
              manga.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((manga) => (
            <li key={manga.id} className="manga-item">
              <Link to={`/manga/${manga.id}`} className="manga-link">
                <div className="manga-cover-container">
                  <img className="manga-cover" src={manga.cover} alt={manga.title} />
                  <div className="haze"></div>
                </div>
                <div>
                  <p>{manga.title}</p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MangaCatalog;