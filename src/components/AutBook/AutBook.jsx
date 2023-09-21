import './AutBook.css'
import Book from "./Book/Book";

export default function AutBook(props){
    // const listItems = props.map(autBook =>
    //     <>
    //         <h3>{ props.author }<button>Del</button></h3>
    //         <p>{ props.book} <button>Del</button></p>
    //         <Book />
    //     </>       
    // )
    return(
        <div className="book col-4">
            <span><h3>{ props.el.author }</h3><button>Х</button></span>
            <ul>
                {
                    props.el.book.map((book, index) =>
                        <Book book ={book} key={index}/>
                    )     
                }
                
            </ul>
            
        </div>  
    )
}