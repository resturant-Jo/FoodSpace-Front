import React from 'react'
import './contactus.css'
function contactus() {
    return (
        <div>
          <form className="contactusform">      
  <input name="name" type="text" class="feedback-input" placeholder="Name" />   
  <input name="email" type="text" class="feedback-input" placeholder="Email" />
  <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
  <input type="submit" value="SUBMIT"/>
</form>  
        </div>
    )
}

export default contactus