import style from './button.module.css';

export default function Button(){
    return(
        <div className={style.button}>
            <a href="#y" className={style.btn + ' '}>Перейти</a>    
        </div>
    );
}