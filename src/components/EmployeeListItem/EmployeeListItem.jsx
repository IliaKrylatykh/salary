import classes from './employeeListItem.module.scss';

const EmployeeListItem = ({name, surname, date, salary, requisites, occupation, paymentStatus}) => {
    
    return (
        <div className={classes.employeeListItem} >
            <input className={classes.checkbox} type="checkbox"/>
            <img className={classes.avatar} src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/04/dogecoin.jpeg.jpg" alt="employeeImg"/>
            <div className={classes.name}>{name} {surname}</div>
            <div className={classes.occupation}>{occupation}</div>
            <div className={classes.date}>{date}</div>
            <div className={classes.salary}>{salary}rub</div>
            <div className={classes.requisites}>{requisites}</div>
            <div className={classes.paymentStatus}>{paymentStatus ? 'Оплачено' : 'Не оплачено'}</div>
            <img className={classes.options}/>
        </div>
    );
};

export default EmployeeListItem;