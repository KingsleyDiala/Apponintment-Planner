import React, { propType } from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input 
        type='text'
        name="name" value={name}
        onChange={(e) => {setName(e.target.value)}}
        required
        placeholder="Contact Name"
        />
      </label>
      <br />
      <label>
        <input 
        name="Phone"
        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
        type='tel'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        placeholder="Contact Phone"
        />
      </label>
      <br></br>
      <label>
        <input 
        type='email'
        name="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Email Address"
        />
      </label>
      <br />
        <input
        type='submit'
        value='Add Contact'
        />
    </form>
  );
};
