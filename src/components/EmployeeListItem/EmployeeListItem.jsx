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
            <button className={classes.options}>{
                <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.49644 15.6666C1.16547 15.6666 0.883321 15.5536 0.649988 15.3278C0.416654 15.1019 0.299988 14.8304 0.299988 14.5132C0.299988 14.196 0.417838 13.9256 0.653538 13.702C0.889221 13.4784 1.17255 13.3666 1.50354 13.3666C1.8345 13.3666 2.11665 13.4795 2.34999 13.7054C2.58332 13.9313 2.69999 14.2028 2.69999 14.52C2.69999 14.8372 2.58214 15.1076 2.34644 15.3312C2.11075 15.5548 1.82742 15.6666 1.49644 15.6666ZM1.49644 9.14992C1.16547 9.14992 0.883321 9.03698 0.649988 8.8111C0.416654 8.58524 0.299988 8.31371 0.299988 7.99652C0.299988 7.67934 0.417838 7.40895 0.653538 7.18534C0.889221 6.96172 1.17255 6.84992 1.50354 6.84992C1.8345 6.84992 2.11665 6.96286 2.34999 7.18874C2.58332 7.4146 2.69999 7.68613 2.69999 8.00332C2.69999 8.3205 2.58214 8.59089 2.34644 8.8145C2.11075 9.03811 1.82742 9.14992 1.49644 9.14992ZM1.49644 2.63325C1.16547 2.63325 0.883321 2.52031 0.649988 2.29443C0.416654 2.06857 0.299988 1.79704 0.299988 1.47985C0.299988 1.16267 0.417838 0.89228 0.653538 0.668669C0.889221 0.445058 1.17255 0.333252 1.50354 0.333252C1.8345 0.333252 2.11665 0.446191 2.34999 0.672071C2.58332 0.897934 2.69999 1.16946 2.69999 1.48665C2.69999 1.80383 2.58214 2.07422 2.34644 2.29784C2.11075 2.52145 1.82742 2.63325 1.49644 2.63325Z" fill="#B5B5C3"/>
                </svg>
            }</button>
        </div>
    );
};

export default EmployeeListItem;