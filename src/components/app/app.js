import React, { useState } from 'react';
import AppInfo from '../app-info/app-info';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import Coun from '../coun/coun';
import Accordions  from '../accordions/accordions';
import NameForm from '../input/input';
import './app.css';



const App = () => {
  const [data, setData] = useState([
    { name: 'John', salary: '800', increase: false, sar: false, id: 1 },
    { name: 'Alex', salary: '3000', increase: false, sar: false, id: 2 },
    { name: 'Carl', salary: '5000', increase: false, sar: false, id: 3 },
  ]);
  const [comm, setComm] = useState('');


  let maxId = 4;

  const handleClick = (id) => {
    setData(data.map((item) =>
      item.id === id ? { ...item, sar: !item.sar, increase: !item.increase } : item
    ));
  };

  const comment = (e) => {
    setComm(e.target.value);
  };

  const onDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      sar: false,
      id: maxId++,
    };

    if (name !== null && typeof name !== 'undefined' && name !== '' && isNaN(name) && salary !== '') {
      setData([...data, newItem]);
    }
  };


  const employees = data.length;
  const promotion = data.filter((item) => item.increase).length;

  return (
    <div className="app">
      <AppInfo
        employees={employees}
        promotion={promotion}
        comment={comment}
        comm={comm}
      />
      <EmployeesList
        data={data}
        handleClick={handleClick}
        onDelete={onDelete}
      />
      <EmployeesAddForm
        onAdd={addItem}
      />
      <Coun />
      <Accordions/>
      <NameForm />
    </div>
  );
};

export default App;