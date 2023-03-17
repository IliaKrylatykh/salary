import classes from './mainHeader.module.scss';
import SvgSelector from '../SvgSelector.jsx/SvgSelector';

const MainHeader = () => {
    return (
        <div className={classes.mainHeader}>
            <a className={classes.logo} href="#!">
                <SvgSelector />
            </a>
            <div className={classes.profile}>
                <a className={classes.email} href="#!">svetlana_lutaya@gmail.com</a>
                <a href="#!">
                    <img className={classes.avatar} src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/04/dogecoin.jpeg.jpg" alt="employeeImg"/>
                </a>
            </div>
        </div>
    );
};

export default MainHeader;