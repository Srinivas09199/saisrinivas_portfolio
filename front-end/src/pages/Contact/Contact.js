import React, {useState} from "react";
import { toast } from 'react-toastify';
//import axios from 'axios';
import "./Contact.css";
import { FaLinkedin, FaSquareGithub, FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import contact from "../../assets/Images/contact.jpg";
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import emailjs from '@emailjs/browser';
//import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")


  //Handle submission form
  const handleSubmit = async (e) => {
    e.preventDefault()

    //Check if all fields are filled 
    if(!name || !email || !message) {
      toast.error("Please fill out all fields")
      return
    }

    try {
      //Send email using EmailJS
      const templateParams = {
        name: name,
        email: email,
        message: message,
      }

      const res = await emailjs.send(
        'service_d2j6d88',
        'template_47gl4oa',
        templateParams,
        'L2_4Z7Lp0YsJ-96Dq'
      )

      //Check the response

      if (res.status === 200) {
        toast.success('Your message has been sent successfully.')
        setName("")
        setEmail("")
        setMessage("")
      }else {
        toast.error('Failed to send message.')
      }
    } catch (error) {
      console.error(error)
      console.error('Failed to Send message. Please try again later.')
    }
  }

  return (
    <>
    <Zoom>
    <div className="contact" id='contact'>
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-xl-6 col-sm-12">
              <div className='card1'>
                <Zoom>
                  <div className='row border-line'>
                    <img src={contact} className='image' alt='contact' />
                  </div>
                </Zoom>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row justify-content-center">
                  <div className="row">
                    <motion.h5
                      variants={fadeIn("left", 0.9)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{
                        once: false, amount: 0.7
                      }}
                    >
                      Get in Touch
                      <FaLinkedin color="blue" size={30} className="ms-2" />
                      <FaSquareGithub color="black" size={30} className="ms-2" />
                      <FaSquareFacebook color="blue" size={30} className="ms-2" />
                      <FaXTwitter color="black" size={30} className="ms-2" />
                    </motion.h5>
                  </div>
                  
                  <div className="row px-3 mb-4">
                    <div className="line" />
                      <small className="or text-center">OR</small>
                    <div className='line' />
                  </div>
                  <div className='row px-3'>
                    <input type="text" name="name" placeholder="Enter your Name" className="mb-3" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className='row px-3'>
                    <input type="email" name="email" placeholder="Enter your Email" className="mb-3" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className='row px-3'>
                    <textarea type="text" name="message" placeholder="Write your Insights" className="mb-3" value={message} onChange={(e) => setMessage(e.target.value)} />
                  </div>
                  <div className='row px-3'>
                    <button  onClick={handleSubmit} className='button'>SEND MESSAGE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Zoom>
    </>
  );
};

export default Contact;
