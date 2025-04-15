/*mport React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all fields.');
      return;
    }

    // Simulate form submission
    try {
      // Replace with your form submission logic (e.g., API call)
      console.log('Form submitted:', formData);
      setFormStatus('Thank you for your message!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus('Error submitting form. Please try again later.');
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          <strong>Address:</strong> 140 Preston Executive Drive, Suite 100B, Cary, NC 27513
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:info@phase1qualityconsulting.com">info@phase1qualityconsulting.com</a>
        </p>
        <p>
          <strong>Phone:</strong> (984) 833-8414
        </p>
      </div>

      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
        {formStatus && <p className="form-status">{formStatus}</p>}
      </div>
    </div>
  );
};

export default ContactPage;
*/

/*"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    interest: "",
    title: "",
    subject: "",
    position: "",
    email: "",
    message: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can replace this with API call to send form data
  };

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Request a Call Back</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

        {/* Row 1: First Name + Area of Interest *//*}
       /* <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ flex: 1 }}>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ flex: 1 }}>
            <label>Area of Interest</label>
            <input
              type="text"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Row 2: Title + Subject *//*}
        /*<div style={{ display: "flex", gap: "20px" }}>
          <div style={{ flex: 1 }}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ flex: 1 }}>
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Row 3: Company/Position + Message + Email *//*}
       /* <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <label>Company/Position</label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <label>Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              style={{ width: "100%" }}
            ></textarea>
          </div>
        </div>

        {/* Row 4: Reason + Submit *//*}
        /*<div style={{ display: "flex", gap: "20px", alignItems: "flex-end" }}>
          <div style={{ flex: 1 }}>
            <label>Reason for Contact</label>
            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              style={{ width: "100%", height: "40px" }}
            >
              <option value="">Select Reason</option>
              <option value="value1">Reason 1</option>
              <option value="value2">Reason 2</option>
              <option value="value3">Reason 3</option>
            </select>
          </div>
          <button type="submit" style={{ height: "40px", padding: "0 20px" }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
*/

/*import React from 'react';
import styles from './Form.module.css'; // Import the CSS module

const Form = () => {
  return (
    <div className={styles.form-container}>
      <h2 className={styles.header}>Request a Call Back</h2>
      
      <form>
        <div className={styles['form-group']}>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Area of Interest" />
        </div>

        <div className={styles['form-group']}>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Subject" />
        </div>

        <div className={styles['form-group']}>
          <input type="text" placeholder="Company/Position" />
          <textarea placeholder="Your Message"></textarea>
        </div>

        <div className={styles['form-group']}>
          <input type="email" placeholder="Email" />
          <textarea placeholder="Your Message"></textarea>
        </div>

        <div className={styles['form-group']}>
          <select>
            <option>Reason for Contact</option>
            <option>Query</option>
            <option>Support</option>
            <option>Other</option>
          </select>
          <button type="submit" className={styles['submit-button']}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form; */
/*import React from 'react';

const RequestCallBackForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  const formStyle = {
    background: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '15px',
    width: '400px',
    margin: '0 auto'
  };

  const labelStyle = {
    marginBottom: '5px',
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#444'
  };

  const inputStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
    width: '100%'
  };

  const textareaStyle = {
    ...inputStyle,
    resize: 'vertical',
    minHeight: '60px'
  };

  const buttonStyle = {
    padding: '12px',
    backgroundColor: '#007BFF',
    border: 'none',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <h2 style={{ textAlign: 'center', marginBottom: '10px', color: '#333' }}>
        Request a Call Back
      </h2>

      <div>
        <label style={labelStyle}>First Name</label>
        <input type="text" name="firstName" required style={inputStyle} />
      </div>

      <div>
        <label style={labelStyle}>Area of Interest</label>
        <input type="text" name="areaInterest" style={inputStyle} />
      </div>

      <div>
        <label style={labelStyle}>Title</label>
        <input type="text" name="title" style={inputStyle} />
      </div>

      <div>
        <label style={labelStyle}>Subject</label>
        <input type="text" name="subject" style={inputStyle} />
      </div>

      <div>
        <label style={labelStyle}>Company / Position</label>
        <input type="text" name="company" style={inputStyle} />
      </div>

      <div>
        <label style={labelStyle}>Details</label>
        <textarea name="details" placeholder="Enter details here..." style={textareaStyle}></textarea>
      </div>

      <div>
        <label style={labelStyle}>Email</label>
        <input type="email" name="email" required style={inputStyle} />
      </div>

      <div>
        <label style={labelStyle}>Additional Information</label>
        <textarea name="moreInfo" placeholder="Add any continuation or comments..." style={textareaStyle}></textarea>
      </div>

      <div>
        <label style={labelStyle}>Reason for Contact</label>
        <input type="text" name="reason" style={inputStyle} />
      </div>

      <button type="submit" style={buttonStyle}>Submit</button>
    </form>
  );
};

export default RequestCallBackForm;*/



import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function PlaceholderCompactForm() {
  const inputStyles = {
    backgroundColor:"#fff",
    color: "#000",
   
  }
   const buttonStyle ={
    backgroundColor :"#1fa27d",
    color:"#fff",
    border:"none"
   }
  return (

    <div style={{backgroundColor:"lightblue" ,
    backgroundImage:"url('/assets/img/vessel.jpg')",
     backgroundSize:"cover",
     minHeight: "10vh" , 
     paddingTop:"20px",
     paddingBottom :"30px",
     position:"relative",
     zIndex:1}}>
    <div className="container mt-3" style={{ maxWidth: "480px", maxHeight: "580px" }}>
      <h2 className="mb-3 text-center text-white font">Request a call back</h2>
      <form  
      style={{ 
        fontSize: "0.8rem",
         overflow: "hidden",
         backgroundColor:"ligtblue",
         color:"#000"
         }}>
        
        {/* Row 1: First Name | Area of Interest */}
        <div className="mb-2 row gx-2">
          <div className="col-6">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="First Name"
              style={inputStyles}
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Area of Interest"
              style={inputStyles}
            />
          </div>
        </div>

        {/* Row 2: Title | Subject */}
        <div className="mb-2 row gx-2">
          <div className="col-6">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Title"
              style={inputStyles}
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Subject"
              style={inputStyles}
            />
          </div>
        </div>

        {/* Row 3: Company/Position | Your Text */}
        <div className="mb-2 row gx-2">
          <div className="col-6">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Company / Position"
              style={inputStyles}
            />
          </div>
          <div className="col-6">
            <textarea
              className="form-control form-control-sm"
              rows="2"
              style={inputStyles}
              placeholder="Your Text"
            ></textarea>
          </div>
        </div>

        {/* Row 4: Email | Continuation Text */}
        <div className="mb-2 row gx-2">
          <div className="col-6">
            <input
              type="email"
              className="form-control form-control-sm"
              placeholder="Email"
              style={inputStyles}
            />
          </div>
         
        </div>

        {/* Row 5: Reason for Contact | Submit */}
        <div className="mb-2 row gx-2">
          <div className="col-6">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Reason for Contact"
              style={inputStyles}
            />
          </div>
          <div className="col-6 d-flex align-items-end">
            <button type="submit" className="btn btn-sm btn-primary w-100"
            style={buttonStyle}>
              Submit
            </button>
          </div>
        </div>

      </form>
    </div>
    </div>

  );
}

export default PlaceholderCompactForm; 