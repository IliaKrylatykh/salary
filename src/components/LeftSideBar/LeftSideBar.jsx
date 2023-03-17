import classes from './leftSideBar.module.scss';
import LeftSideBarSvg from './LeftSideBarSvg';

const LeftSideBar = () => {
    return (
        <div className={classes.leftSideBar}>
            <ul className={classes.list}>
                <li className={classes.listItem}>
                    <LeftSideBarSvg id='payments'/>
                    <a className={classes.listText} href="#!">Платежи</a>
                </li>
                <li className={classes.listItem}>
                    <LeftSideBarSvg id='statistics'/>
                    <a className={classes.listText} href="#!">Статистика</a>
                </li>
                <li className={classes.listItem}>
                    <LeftSideBarSvg id='documents'/> 
                    <a className={classes.listText} href="#!">Документы</a>
                </li>
                <li className={classes.listItem}>
                    <LeftSideBarSvg id='calendar'/>
                    <a className={classes.listText} href="#!">Календарь</a>
                </li>
                <li className={classes.listItem}>
                    <LeftSideBarSvg id='settings'/>
                    <a className={classes.listText} href="#!">Настройки</a>
                </li>
            </ul>
        </div>
    );
};

export default LeftSideBar;