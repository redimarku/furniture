import React from "react";
import './index.css'

const NewsletterBox = () =>{

    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }

    return(
        <div className="mt-5 text-center">
            <h3>Join Our Mailing List</h3>
            <p style={{color:"grey", marginTop:"15px"}}>Sign up to receive inspiration, product updates, and special offers from our team.</p>

            <form onSubmit={onSubmitHandler}>
                <input 
                className="email"
                type="email"
                placeholder="Enter your email..."
                >

                </input>
                <button type="submit" className="submit-email">Subscribe</button>
            </form>
        </div>
    );
}

export default NewsletterBox;