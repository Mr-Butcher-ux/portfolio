import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'





const Contact = () => {
    const form = useRef();
    const[lettersClass, setLettersClass] = useState ('text-animate')
    const position = [29.4252, -98.49114]
    
    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLettersClass('text-animate-hover')
        }, 3000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_mt37aog', 'template_rdpmitn', form.current, '7rnGUDa1g2t116Hce')
      .then((result) => {
        alert('Message successfully sent!')
        window.location.reload(false)
      }, (error) => {
        alert('Failed to send the message, please try again')
      });
  };
    
   
    return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters lettersClass={lettersClass}
                    strArray={['C','o','n','t','a','c','','m','e']}
                    idx={15}/>
                </h1>
                <p>
                    If you want to contact me, fill the form below.
                </p>
                <div className='contact-form'>
                   
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required/>

                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required/>

                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required>

                                </textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-buttom' value='SEND'/>
                            </li>
                        </ul>
                    </form>

                </div>
              
            </div>
            <div className='info-map'>
            Bryan Rocha
            <br/>
            United States
            <br/>
            San Antonio, Texas

        </div>
        <div className='map-wrap'> 
              <MapContainer center={position} zoom={11} >
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position= {position}>
                    <Popup>I am living in this city</Popup>
                    
                </Marker> 
              </MapContainer>
        </div>
       

        </div>          
        <Loader type ='ball-scale-multiple' />
   </>
    )
}

export default Contact