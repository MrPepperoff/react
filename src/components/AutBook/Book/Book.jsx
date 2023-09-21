import "./Book.css";

export default function Book(props){
    return(
        <li><span>{props.book}</span><button>Х</button></li>
    );
}