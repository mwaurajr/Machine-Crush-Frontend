import React, { useRef } from 'react'
import "./about.css"


function Contact() {
  const nameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const messageRef = useRef()

  return (
    <div>
    <h1 id='us'>Contact Us</h1>
    <div className='topsection'>
      <div className='row'>
        <h2>Help</h2>
        <br />
        <p>
          You can always get in touch with us. Our support team is always
          24hrs on the line. Reach us by chat or make a call for any urgent
          trade ins.
        </p>
      </div>
      <div className='row'>
        <h2>Feedback</h2>
        <br />
        <p>
          We value our customer's feedbak. do not hesitate to leave us a
          comment on our services. We're glad to hear from you
        </p>
      </div>
      <div className='row'>
        <h2>Address</h2>
        <br />
        <p>
          We are located along Murife avenue, at PikiByke Plaza, Nairobi
          Kenya.You can also check our websites to find our offices next to
          you
        </p>
      </div>
    </div>
    <div className='counties'>
      <div>
        <h3>Nairobi</h3>
        <p>
          <i className='fa-solid fa-phone' /> 0200123445
        </p>
        <p>
          <i className='fa-solid fa-envelope' /> nairobi@4pfCarDealers.com
        </p>
      </div>
      <div>
        <h3>Mombasa</h3>
        <p>
          <i className='fa-solid fa-phone' /> 0200123445
        </p>
        <p>
          <i className='fa-solid fa-envelope' /> mombasa@4pfCarDealers.com
        </p>
      </div>
      <div>
        <h3>Kisumu</h3>
        <p>
          <i className='fa-solid fa-phone' /> 0200123445
        </p>
        <p>
          <i className='fa-solid fa-envelope' /> kisumu@4pfCarDealers.com
        </p>
      </div>
    </div>
    <div className='counties'>
      <div>
        <h3>Kiambu</h3>
        <p>
          <i className='fa-solid fa-phone' /> 0200123445
        </p>
        <p>
          <i className='fa-solid fa-envelope' /> nakuru@4pfCarDealers.com
        </p>
      </div>
      <div>
        <h3>Taita Taveta</h3>
        <p>
          <i className='fa-solid fa-phone' /> 0200123445
        </p>
        <p>
          <i className='fa-solid fa-envelope' /> kiambu@4pfCarDealers.com
        </p>
      </div>
      <div>
        <h3>Kajiado</h3>
        <p>
          <i className='fa-solid fa-phone' /> 0200123445
        </p>
        <p>
          <i className='fa-solid fa-envelope' /> Eldoret@4pfCarDealers.com
        </p>
      </div>
    </div>
    <div className='counties'>
      <div>
        <h3>Nakuru</h3>
        <p>
          <i className='fa-solid fa-phone' /> 0200123445
        </p>
        <p>
          <i className='fa-solid fa-envelope' /> kisii@4pfCarDealers.com
        </p>
      </div>
      <div />
      <div />
    </div>
    <div className='social'>
      <div className='platforms'>
        <div>
          <p>
            <i className='fa-brands fa-instagram' /> 4pfCarDealers Automotives
          </p>
        </div>
        <div>
          <p>
            <i className='fa-brands fa-twitter' /> 4pfCarDealers Automotives
          </p>
        </div>
        <div>
          <p>
            <i className='fa-brands fa-facebook' /> 4pfCarDealers Automotives
          </p>
        </div>
      </div>

      <div className='form'>
        <h3 id='mail'>Contact Us</h3>
        <form>
          <div className='labels'>
            <label htmlFor='name'>Name</label>
            <br />
            <input
              type='text'
              id='fullname'
              placeholder='Frank Murife'
              required
              ref={nameRef}
            />
          </div>
          <div className='labels'>
            <label htmlFor='name'>Email Address</label>
            <br />
            <input
              type='email'
              id='fullname'
              placeholder='me@example.com'
              required
              ref={emailRef}
            />
          </div>
          <div className='labels'>
            <label htmlFor='name'>Phone Number</label>
            <b>
              <input type='tel' id='fullname' placeholder={+254} required ref={phoneRef}/>
              <br />
            </b>
          </div>
          <b>
            <div className='labels'>
              <label htmlFor='name'>Message</label>
              <br />
              <textarea
                type='text'
                id='usermessage'
                placeholder='Write your message here..'
                style={{
                  height: '150px',
                  width: '100%',
                  borderRadius: '12px',
                  padding: '15px',
                }}
                defaultValue={''}
                ref={messageRef}
              />
            </div>
            <div className='btnclassName'>
              <button type='submit' id='btn' value='submit'>
                Submit
              </button>
            </div>
          </b>
        </form>
      </div>
    </div>
    <b></b>
  </div>
        
  )
}

export default Contact
 