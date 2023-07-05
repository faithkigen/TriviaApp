import React from "react";
import "./Contact.css"; // Import CSS file


const contacts = [
  
  {
    id: 4,
    name: "Cindy Muthoni",
    image: "https://i.pinimg.com/236x/2b/52/4e/2b524e336c16d5defec2f8cc532c765b.jpg",
    details: "Trivia Master"
  }
];

const ContactCard = ({ contact }) => {
  return (
    <div className="contact-card">
      <img src={contact.image} alt={contact.name} />
      <h2>{contact.name}</h2>
      <p className="contact-card-p">{contact.details}</p>
    </div>
  );
};

const Contact = () => {
  return (
      <div>
        <h1 className="contact-title">Contact</h1>
          <div className="contacts">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
   
  );
};

export default Contact;