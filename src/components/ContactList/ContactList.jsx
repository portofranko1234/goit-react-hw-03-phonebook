import React from "react";
import PropTypes from "prop-types"; // ES6

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>
          {name}
          <span>{number}</span>
        </p>
        <button type="button" onClick={() => onDeleteContact(id)}>
          Удалить
        </button>
      </li>
    ))}
  </ul>
);
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func,
};
export default ContactList;
