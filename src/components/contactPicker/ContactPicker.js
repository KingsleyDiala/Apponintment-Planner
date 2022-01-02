import React from "react";

export const ContactPicker = ({name, contacts, onChange}) => {
  return (
    <select name={name} onChange={onChange}>
      <option value={''} key={-1} selected='selected'>
        No contact selected
      </option>
      {contacts.map((contact) => {
        return (
          <option contacts={contact} key={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};
