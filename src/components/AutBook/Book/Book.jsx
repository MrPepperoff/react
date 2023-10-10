import "./Book.css";

export default function Book(props){
    return(
        
        <li><span>{props.book}</span><button onClick={()=>props.onDeleteBook(props.authorId, props.index)}>Х</button></li>
    );
}