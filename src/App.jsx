import { useState } from "react";
import "./App.css";

import contactForm from "./componant/conatctForm";

import ContactItem from "./componant/ContactItem";
import ContactList from "./componant/contactList";
import ContactList from "./componant/contactList";


function App() {
  const [people, setPeople] = useState([]);

  const deleteContact = (id) => {
    const newPeople = people.filter(([people], idx) => {
      return idx !== id;
    });
    const addPerson = (newPerson) => {
      setPeople([...people, newPerson]);
    };

    return (
      <>
        <contactForm addPerson={addPerson} />
        <ContactList people={people} />
        <ContactItem deleteContact={deleteContact} people={people} />
      </>
    );
  }
}
export default App;
