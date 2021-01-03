import React from 'react';
import style from './Book.module.css';


const Book = props => (
  <div className="libri">
   {props.book.map((book) => {
     if (book.volumeInfo.imageLinks !=null) {
    return (
      <div key={book.id} className={style.book}>
        <img className={style.img} src={book.volumeInfo.imageLinks.thumbnail} alt="" />
        <h3 className={style.text}>{book.volumeInfo.title}</h3>
        <p className={style.text}>{book.volumeInfo.authors}</p>
        <button className={style.button}><a href={book.volumeInfo.infoLink} starget="_self" className={style.textbutton}>Info</a></button>
      </div>
    )
   } else {
     return (
       <div key={book.id} className={style.book}>
         <a href={book.volumeInfo.infoLink} target="_self">Copertina non disponibile</a>
         <h3 className={style.text}>{book.volumeInfo.title}</h3>
         <p className={style.text}>{book.volumeInfo.authors}</p>
         <button className={style.button}><a href={book.volumeInfo.infoLink} target="_self">Info</a></button>
       </div>
     )
   }
   
   })}
   </div>
   )

export default Book;
