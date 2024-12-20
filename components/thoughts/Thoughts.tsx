import './thoughts.css'

export default function Location() {
    return (
      <>
        <div className="thoughts-container">
        {/* for desktop- this will appear in the left block */}
         <div className='left-part'>
            <h3>We'd love to hear your thoughts</h3> <br />
            <p>We are always on the lookout to bring you the best of what we can offer. If you have any feedback or questions, fill out the contact form and someone from our friendly team will be in touch with you as soon as possible.</p>
         </div>
            {/* this will appear in the right block */}
          <div className='right-part'>
            <div className="mini-form">
                <input 
                type="text" 
                required 
                placeholder="Enter your Name"
                />
    
                <input 
                type="email" 
                required 
                placeholder="Enter your Email"
                />
    
                <textarea 
                placeholder="Type your message here..." 
                required 
                ></textarea>
    
                <button type="submit">Submit</button>
            </div>
          </div>
         
        </div>
      </>
    );
  }
  