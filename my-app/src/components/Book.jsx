import React from 'react';

function Book({name, author, genre, year, pages}){
    return (
        <div>
            <h1>Моя любимая книга </h1>
            <p>Название: {name}</p>
            <p>Автор: {author}</p>
            <p>Жанр: {genre}</p>
            <p>Год издания: {year}</p>
            <p>Количество страниц: {pages}</p>
        </div>
    )
}

export default Book;