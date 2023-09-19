import style from './card.module.css';
import Button from '../Button/Button';
import Text from './Text/Text';
import Title from './Title/Title';
import Image from './Image/Image';

export default function Card(){
    return(
        <div className={style.card}>
            <div className="card">
                < Image />
                <div className="card-body">
                    < Title />
                    <Text />
                    <Button />
                </div>
            </div>
        </div>
    );
}