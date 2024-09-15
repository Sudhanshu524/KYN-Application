import React from 'react';
import './ContactUs.css';
const ContactUs = () => {
    return (
        <div className="contact-container">
                <h1 className="contact-title">CONTACT US</h1>
              
                <p>KYN Online Store has proudly served clients seeking I.R.C § 1031 counsel as Qualified Intermediaries with precision and excellence for over 2 years. We often personally meet with clients, and speak at educational events on “Tax Deferred Exchanges.”
<br/>

<p>
<b>Email:</b><br/> info@kyn1031.com</p>

<p>
<b>Phone:</b> <br/>556677899899</p>


<b>Main Office:</b><br/>
22 Apple Street, INDIA</p>

<div>
<form >
    
<h3 className="contact-title">Feedback</h3>
                <div className="form-item">
                    <input type="email" name="email" 
                        className="form-control" placeholder="Email"
                         required/>
                </div>
                <div className="form-item">
                    <input type="text" name="Feedback" 
                        className="form-control" placeholder="Feedback"
                         required/>
                </div>
                <div className="form-item">
                    <button type="submit" className="btn btn-block loginBtn">Login</button>
                </div>
            </form>   
            </div>      
              
        </div>

        
    )
   
        
   
}

export default ContactUs;