import React, { useState } from 'react';

import './employees-add-form.css';

const EmployeesAddForm = ({ onAdd }) => {
    const [formData, setFormData] = useState({ name: '', salary: '' });

    const onValueChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!formData.name.trim() || !formData.salary.trim()){
            return;
        }
        onAdd(formData.name, parseFloat(formData.salary));
        setFormData({ name: '', salary: '' });
    };

    const { name, salary } = formData;

    return (
        <div className="app-add-form">
            <h3>Add new employees</h3>
            <form className="add-form d-flex" onSubmit={onSubmit}>
                <input
                    type="text"
                    className="form-control new-post-label"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={onValueChange}
                />
                <input
                    type="number"
                    className="form-control new-post-label"
                    placeholder="Salary"
                    name="salary"
                    value={salary}
                    onChange={onValueChange}
                />
                <button type="submit" className="btn btn-outline-light">
                    Add
                </button>
            </form>
        </div>
    );
};

export default EmployeesAddForm;