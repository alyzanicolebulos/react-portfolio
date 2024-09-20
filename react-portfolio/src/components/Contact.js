import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <div className="contact-title-block">
        <div className="container">
          <h1>Contact</h1>
          <form onSubmit={() => alert('Thank you for your response')}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="name@example.com" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="3" required></textarea>
            </div>
            <div className="form-button">
              <button type="submit" className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
