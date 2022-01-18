import { useState } from 'react';
import './NewColorAddForm.css';
import { useHistory } from 'react-router-dom';

function NewColorAddForm({addColor}) {
    const history = useHistory();
    const [formData, setFormData] = useState({color: "", hex: "#ffffff"});

    // Send color and id to parent and clears form
    const handleSubmit = (evt) => {
        evt.preventDefault();
        addColor({ [formData.color]: formData.hex });
        history.push('/colors');
    };

    // Updates local state with current state of input element
    const handleChange = (evt) => {
        const { name, value }= evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    return (
        <form className="NewColorAddForm" onSubmit={handleSubmit}>
            <p>Choose a new color and its name to add to the Color List:</p>
            <label htmlFor="hex">Color HEX value:</label>
            <input 
                id="hex"
                name="hex"
                type="color"
                value={formData.hex}
                onChange={handleChange}
                required>
            </input>                 
            <label htmlFor="color">Color name:</label>
            <input 
                id="color"
                name="color"
                type="text"
                placeholder="Enter a color name..."
                value={formData.color}
                onChange={handleChange}
                required>
            </input>                  
            <button>Add</button>
        </form>
    )
}

export default NewColorAddForm;