import { useState } from 'react'
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

export const ContactForm = ({onSubmit}) => {
    
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const handleChangeNumber = (e) => {
    const value = e.target.value;
    setNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };
  
        return (
            <div>
                <form className={css.form} onSubmit={handleSubmit}>
                    <label className={css.label}>
                        Name
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={name}
                            onChange={handleChangeName}
                            className={css.input}
                        />
                    </label>

                    <label className={css.label}>
                        Number
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={number}
                            onChange={handleChangeNumber}
                            className={css.input}
                        />
                    </label>

                    <button type="submit" className={css.button}>
                        Add contact
                    </button>
                </form>
            </div>
        )
    }

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  filter: PropTypes.string,
};