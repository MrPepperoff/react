import './AutBook.css'
import Book from "./Book/Book";


export default function AutBook(props){
    let onDeleteAuthor = props.onDeleteAuthor
    return(
        <div className="book_wrap col-4 p-2">
            <div className="book">
                <div className="title">
                    <h3>{ props.el.name }</h3> 
                    <button onClick={()=>onDeleteAuthor(props.index)}>Х</button>
                </div>
                {props.el.book.length > 0 ? (
                <ul>
                    {
                        props.el.book.map((book, index) =>
                            <Book book ={book} key={props.el.id + "_" + index} onDeleteBook={props.onDeleteBook} index={index} authorId={props.index}/>
                        )     
                    }
                </ul> 
                ) : (
                    <p>Книг нет</p>
                    
                )}
            </div>
        </div>  
    )
}