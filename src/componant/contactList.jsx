
import ContactItem from "./ContactItem";

function ContactList({ people, deleteContact }) {
    return (
        <div>
            <h1>herllop</h1>
            <ul>
                {people.map((person, idx) => (
                    <ContactItem
                        key={idx}
                        person={person}
                        index={idx}
                        deleteContact={deleteContact}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ContactList;

