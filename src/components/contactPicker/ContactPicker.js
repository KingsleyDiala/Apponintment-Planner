import React from "react";

export const ContactPicker = ({value, onChange}) => {
  return (
    <select name="name" onChange={onChange}>
      <option value={''} key={-1} selected='selected'>
        No contact selected
      </option>
      {value.map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};
