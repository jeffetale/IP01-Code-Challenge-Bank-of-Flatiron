import React, {useState} from 'react';
import './TransactionForm.css'

const TransactionForm = ({addTransaction}) => {
    const [formData, setFormData] = useState({
        date : '',
        description : '',
        category : '',
        amount : '',
    });
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value });
        console.log('data set');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction(formData);
        setFormData({
            date : '',
            description : '',
            category : '',
            amount : '',
        });
    };

    return (
        <form  className="transaction-form" onSubmit={handleSubmit}>
            <label>
                Date:
                <input type = "date" name = "date" value = {formData.date} onChange={handleChange} /> 
            </label>
            <label>
                Description:
                <input type = "text" name = "description" value = {formData.description} onChange={handleChange} /> 
            </label>
            <label>
                Category:
                <input type = "text" name = "category" value = {formData.category} onChange={handleChange} /> 
            </label>
            <label>
                Amount:
                <input type = "number" name = "amount" value = {formData.amount} onChange={handleChange} /> 
            </label>
            <button type='submit'> New Transaction</button>
        </form>
    );
};

export default TransactionForm;