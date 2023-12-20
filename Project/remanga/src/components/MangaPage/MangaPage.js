import React from 'react';

const mangaList = [
    { id: 1, title: 'Взаправду Ерунда', cover: '/covers/cover1.jpg', genres: ['Комедия', 'Повседневность'] },
];

const handleReadManga = (id) => {
  console.log(`Чтение манги с ID ${id}`);
};

const MangaPage = ({ params }) => {
  if (!params) {
    return <div>Ошибка: параметры маршрута не определены</div>;
  }

  const id = params.id;

  const manga = mangaList.find((manga) => manga.id === parseInt(id));

  if (!manga) {
    return <div>Манга не найдена</div>;
  }

  return (
    <div>
      <h2>{manga.title}</h2>
      <img src={manga.cover} alt={manga.title} />
      <p>Жанры: {manga.genres.join(', ')}</p>

      <button onClick={() => handleReadManga(id)}>Прочитать мангу</button>
    </div>
  );
};

export default MangaPage;