import logo from './media/logo.svg';
import './App.css';
import { useState } from 'react';
import Test from './components/Test/Test';
import Card from './components/Card/Card';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import AutBook from './components/AutBook/AutBook';






function App() {
  let textLogo = "React";
  let [authors, setAut] = useState([
    {
    id:0,
    name: "Пушкин", 
    book:[
            'Руслан и Людмила (1817-1820)', 
            'Евгений Онегин (1823-1832)', 
            'Борис Годунов (1825)', 
            'Маленькие трагедии (1830)', 
            'Медный всадник (1833)',
            'Пиковая дама (1834)',
            'Капитанская дочка (1836)'
        ]
    },
    {
    id:1,
    name:"Толстой", 
    book:[
            'Детство (1852)',
            'Севастопольские рассказы (1855—1856)',
            'Война и мир (1863—1869)',
            'Кавказский пленник (1872)',
            'Анна Каренина (1873—1877)',
            'Смерть Ивана Ильича (1884—1886)',
            'Крейцерова соната (1887—1889)',
            'Воскресение (1889—1899)',
            'Хаджи-Мурат (1896—1904)',
            'Отец Сергий (1898)'
        ] 
    },
    {
    id:2,
    name:"Стивен Кинг", 
    book:[
        'Зеленая миля',
        'Черный дом',
        'Пламя',
        'Доктор Сон',
        'Возрождение',
        'Оно',
        'Глаза дракона',
        'Кладбище домашних животных',
        'Бегущий человек',
        'Ярость',
        'Сияние',
        'Стрелок'
        ] 
    }
  ]
  )
      
function onDeleteAuthor(authorId){
  // console.log(authorId)
  let copy = authors.slice(authors.splice(authorId, 1));
  setAut(copy);
}


function onDeleteBook(authorId, bookIndex) {
  
  let copy = authors.map(author => {
    if (author.id + "_" + bookIndex === authorId + "_" + bookIndex) {
      let bookCopy = author.book.slice(author.book.splice(bookIndex, 1));
      return {
        ...author,
        book: bookCopy // обновляем массив книг у автора
      };
    } else {
      return author;
    }
  });
  setAut(copy); // обновляем состояние компонента с новым массивом авторов
}

  return (
  <div className="App">
    <header className="App-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="App-logo-wrap" href="#y">
              <img src={logo} className="App-logo" alt="logo" />
              <span>{ textLogo }</span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item me-1">
                  
                </li>
                <li className="nav-item">
                  
                </li>
              </ul>
            </div>
          </div>
        </nav>  
      </div>
    </header>
    < Test />
    <div className="container">
        <div className="row mt-4">
          {
            authors.map((el, index)=>
              
              < AutBook 
                el={el} 
                key={el.id} 
                onDeleteBook={onDeleteBook}
                onDeleteAuthor={onDeleteAuthor}
                index={index}
              />
          )}
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className="col-4">
            < Card />  
          </div>
          <div className="col-4">
            < Card />  
          </div>
          <div className="col-4">
            < Card />  
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
