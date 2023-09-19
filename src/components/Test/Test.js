import style from './Test.module.css';

export default function Test(){
    return(
        <div className={style.Test}>
            <p className={style.content + ' ' + style.content2}>Test component</p>
            
        </div>
    );
}
