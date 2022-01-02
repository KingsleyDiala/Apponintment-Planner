
import { useEffect } from "react";
import React, { useState } from "react";
import { ContactForm } from '../../../src/components/contactForm/ContactForm'
import { TileList } from '../../../src/components/tileList/TileList'

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [contactName, setName] = useState('');
  const [contactNumber, setNumber] = useState('')
  const [contactEmail, setEmail] = useState('');
  const [duplicateName, setDuplicateName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicateName) {
      addContact(contactName, contactNumber, contactEmail)
      setName('');
      setNumber('');
      setEmail('');
    }
  }
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const nameIsDuplicate = () => {
      const found = contacts.find((contact) => contact.name === contactName);
      if (found !== undefined) {
        return true;
      }
      return false;
    };

    if (nameIsDuplicate()) {
      setDuplicateName(true);
    } else {
      setDuplicateName(false);
    }
  }, [contactName, contacts, duplicateName])

  return (
    <div>
      <section>
        <h2>Add Contact {duplicateName ? 'Name already Exists' : ''} </h2> 
        <ContactForm 
        name={contactName}
        setName={setName}
        phone={contactNumber} 
        setPhone={setNumber}
        email={contactEmail} 
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        />
        <TileList tiles={contacts} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
