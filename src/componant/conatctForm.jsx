import { useState } from "react";
function contactForm({ addPerson }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPerson = {
            username,
            email
        };
        addPerson(newPerson);

        setUsername("");
        setEmail("");
    }
    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <hr style={{ margin: "30px 0" }} />
            <h1> Contact Form </h1>

            <h2>Add a Person</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={username}
                    onChange={(e) => setUsername(e.target.value)} />

                <input type="email" placeholder="Email" value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <button type="submit" style={{ marginLeft: "10px" }}>
                    Add Person
                </button>
            </form>
        </div>

    );
}

export default contactForm;
