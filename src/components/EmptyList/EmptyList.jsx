import img from '../../imgs/emptyListImg.jpg';
import ButtonBlack from '../UI/ButtonBlack/ButtonBlack';
import classes from './emptyList.module.scss';

const EmptyList = () => {
    return (
        <div className={classes.emptyListBody}>
            <img className={classes.img} src={img} alt="emptyListImg"/>
            <div style={{
                fontWeight: 500,
                fontSize: '32px',
                marginTop: '30px'
                }}>
                    Добавьте сотрудников
            </div>
            <div style={{
                color: '#B5B5C3',
                margin: '30px 0'}}>
                    Выдавайте зарплату за один клик!
            </div>
            <ButtonBlack>
                Добавить сотрудников
            </ButtonBlack>
        </div>
    );
};

export default EmptyList;