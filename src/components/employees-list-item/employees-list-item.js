

import './employees-list-item.css';


const EmployeesListItem = ({name, salary, handleClick, sar, increase, onDelete}) => {

    let className = 'list-group-item d-flex justify-content-between' 

    if (increase){
        className += ' increase';
    }
    if (sar){
        className += ' like';
    }

    return (
        <li className={className} >
            <span className="list-group-item-label" onClick={handleClick}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + ' £'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash" onClick={onDelete}></i>
                </button>
                <i className='fas fa-star'></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;

