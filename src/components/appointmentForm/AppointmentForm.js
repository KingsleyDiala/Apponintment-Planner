import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
        name="Title"
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        placeholder="Appointment Title"
        />
      </label>
      <label>
        <ContactPicker
        name='Contacts'
        value={contact}
        type='text'
        onChange={(e) => setContact(e.target.value)}
        required
        placeholder='Appointment With'
        />
      </label>
      <label>
        <input
        name="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        type='date'
        min={getTodayString}
        />
      </label>
      <label>
        <input
        name="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        type='time'
        />
      </label>
      <input value='Add Appointment' type='submit' />
    </form>
  );
};
