import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";

import classes from './employeeList.module.scss';


const EmployeeList = ({employees}) => {

    return (
        <div className={classes.employeeList}>
            <div className={classes.header}>
                <input className={classes.checkbox} type="checkbox"/>
                <div className={classes.name} >Имя Фамилия</div>
                <div className={classes.occupation} >Должность</div>
                <div className={classes.date} >Дата</div>
                <div className={classes.salary} >Зарплата</div>
                <div className={classes.requisites} >Реквизиты</div>
                <div className={classes.paymentStatus} >Выплата</div>
            </div>
            <div>
                {employees.map((employee) => 
                    <EmployeeListItem
                        name={employee.name}
                        surname={employee.surname}
                        date={employee.date}
                        salary={employee.salary}
                        requisites={employee.requisites}
                        occupation={employee.occupation}
                        paymentStatus={employee.paymentStatus}
                        key={employee.id}
                    />
                )}
            </div>
        </div>
    );
};

export default EmployeeList;