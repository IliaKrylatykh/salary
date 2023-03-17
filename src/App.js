import { useState } from 'react';
import EmployeeList from './components/EmployeeList/EmployeeList';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';
import MainHeader from './components/MainHeader/MainHeader';
import './styles/app.scss';

function App() {
    const [employees, setEmployees] = useState([
        {id: 1, name: 'Екатерина', surname: 'Нечаева', occupation: 'Программист', date: '21.02.22', salary: 80000, requisites: 371331730661007, paymentStatus: true },
        {id: 2, name: 'Майор', surname: 'Нечаев', occupation: 'Веб-дизайнер', date: '24.02.22', salary: 80000, requisites: 373948001861007, paymentStatus: false },
        {id: 3, name: 'Доктор', surname: 'Кто', occupation: 'Психолог', date: '30.02.22', salary: 120000, requisites: 455645450181007, paymentStatus: true },
        {id: 4, name: 'Майор', surname: 'Нечаев', occupation: 'Веб-дизайнер', date: '24.02.22', salary: 80000, requisites: 373948001861007, paymentStatus: false },
        {id: 5, name: 'Майор', surname: 'Нечаев', occupation: 'Веб-дизайнер', date: '24.02.22', salary: 80000, requisites: 373948001861007, paymentStatus: false },
        {id: 6, name: 'Майор', surname: 'Нечаев', occupation: 'Веб-дизайнер', date: '24.02.22', salary: 80000, requisites: 373948001861007, paymentStatus: false },
        {id: 7, name: 'Майор', surname: 'Нечаев', occupation: 'Веб-дизайнер', date: '24.02.22', salary: 80000, requisites: 373948001861007, paymentStatus: false },
        {id: 8, name: 'Майор', surname: 'Нечаев', occupation: 'Веб-дизайнер', date: '24.02.22', salary: 80000, requisites: 373948001861007, paymentStatus: false },
        {id: 9, name: 'Майор', surname: 'Нечаев', occupation: 'Веб-дизайнер', date: '24.02.22', salary: 80000, requisites: 373948001861007, paymentStatus: false },
    ])

    return (
        <div className="App">
            <MainHeader/>
            <div className='appBody'>
                <LeftSideBar/>
                <div>
                    <EmployeeList
                        employees={employees}
                        total={employees.length}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
