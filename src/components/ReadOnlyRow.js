import React from 'react';

const ReadOnlyRow = ({ contact, index, handleEditClick }) => {
  return (
    <tr key={index}>
      <td>{contact.fullName}</td>
      <td> {contact.address}</td>
      <td> {contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
