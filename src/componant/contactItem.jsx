function ContactItem({ person, index, deleteContact }) {
    return (
        <li>
            <strong>{person.username}</strong> — {person.email}{" "}
            <button onClick={() => deleteContact(index)}>Delete</button>
        </li>
    );
}

export default ContactItem;
