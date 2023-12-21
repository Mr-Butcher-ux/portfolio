import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import {
  
  faApple,
  faAws,
    faHtml5,
    faJava, faJsSquare, faLinux, faPython, faReact, faUbuntu, faWindows,
    
  } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { faC, faDatabase } from '@fortawesome/free-solid-svg-icons'





const Skills= () => {
    const[lettersClass, setLettersClass] = useState ('text-animate')
    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLettersClass('text-animate-hover')
        }, 3000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    return (
    <>
        
        <div className='container skills-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    lettersClass={lettersClass}
                    strArray={['S','k','i','l','l','s']} idx={15}/>
                </h1>
                <p>I am proficient in Java, Python, C, Javascript, Structured Query Language (SQL), Css/Scss and Html.</p>
                <p>Pycharm, NetBeans, IntelliJ IDEA, Wireshark, Nmap, Burp Suite, Metasploit, Anaconda, React, MongoDB and Amazon Web Services.</p>
                <p>Linux, Windows and macOS are not a problem.</p>

            </div>
            <div className="stage-cards-cont ">
              <div className='cards-containers'>
              <div className='row'>
                <div className='column'>
                  <div className='flip-card'>                              
                    <div className='flip-card-inner'>
                      <div className='flip-card-front fa-8x'>                    
                        <FontAwesomeIcon icon={faJava}/>                                              
                      </div>
                      <div className='flip-card-back fa-8x '>
                        <FontAwesomeIcon icon={faJava} color='#f89820' beat/>                    
                      </div>                    
                    </div>
                  </div>
                  <div className='flip-card'>                             
                    <div className='flip-card-inner'>
                      <div className='flip-card-front fa-8x'>                    
                        <FontAwesomeIcon icon={faPython}/>                                               
                      </div>
                      <div className='flip-card-back fa-8x'>
                        <FontAwesomeIcon icon={faPython} color=' #4b8bbe' beat/>                    
                      </div>                     
                    </div>
                  </div> 
                  <div className='flip-card'>                              
                    <div className='flip-card-inner'>
                      <div className='flip-card-front fa-8x'>                    
                        <FontAwesomeIcon icon={faC}/>                                              
                      </div>
                      <div className='flip-card-back fa-8x'>
                        <FontAwesomeIcon icon={faC} beat/>                    
                      </div>                    
                    </div>
                  </div>
                  <div className='flip-card'>                             
                    <div className='flip-card-inner'>
                      <div className='flip-card-front fa-8x'>                    
                        <FontAwesomeIcon icon={faJsSquare}/>                                               
                      </div>
                      <div className='flip-card-back fa-8x'>
                        <FontAwesomeIcon icon={faJsSquare} color='#f0db4f' beat/>                    
                      </div>                     
                    </div>
                  </div>                                                         
              </div>
              <div className='column'>
                  <div className='flip-card'>                              
                    <div className='flip-card-inner'>
                      <div className='flip-card-front fa-8x'>                    
                        <FontAwesomeIcon icon={faHtml5}/>                                              
                      </div>
                      <div className='flip-card-back fa-8x'>
                        <FontAwesomeIcon icon={faHtml5} color='#e34c26' beat/>                    
                      </div>                    
                    </div>
                  </div>
                  <div className='flip-card'>                             
                    <div className='flip-card-inner'>
                      <div className='flip-card-front fa-8x'>                    
                        <FontAwesomeIcon icon={faDatabase}/>                                               
                      </div>
                      <div className='flip-card-back fa-8x'>
                        <FontAwesomeIcon icon={faDatabase} color='#00758f' beat/>                    
                      </div>                     
                    </div>
                  </div> 
                  <div className='flip-card'>                              
                    <div className='flip-card-inner'>
                      <div className='flip-card-front fa-8x'>                    
                        <FontAwesomeIcon icon={faReact}/>                                              
                      </div>
                      <div className='flip-card-back fa-8x'>
                        <FontAwesomeIcon icon={faReact} color='#61dbfb' beat/>                    
                      </div>                    
                    </div>
                  </div>
                  <div className='flip-card'>                             
                    <div className='flip-card-inner'>
                      <div className='flip-card-front fa-8x'>                    
                        <FontAwesomeIcon icon={faAws}/>                                               
                      </div>
                      <div className='flip-card-back fa-8x'>
                        <FontAwesomeIcon icon={faAws} color='#ff9900' beat/>                    
                      </div>                     
                    </div>
                  </div> 
                  </div>
                  <div className='column'>
                  <div className='flip-card'>                              
                    <div className='flip-card-inner'>
                      <div className='flip-card-front fa-8x'>                    
                        <FontAwesomeIcon icon={faWindows}/>                                              
                      </div>
                      <div className='flip-card-back fa-8x'>
                        <FontAwesomeIcon icon={faWindows} color='#7cbb00' beat/>                    
                      </div>                    
                    </div>
                  </div>
                  <div className='flip-card'>                             
                    <div className='flip-card-inner'>
                      <div className='flip-card-front fa-8x'>                    
                        <FontAwesomeIcon icon={faApple}/>                                               
                      </div>
                      <div className='flip-card-back fa-8x'>
                        <FontAwesomeIcon icon={faApple} color=' aA2aaad' beat/>                    
                      </div>                     
                    </div>
                  </div> 
                  <div className='flip-card'>                              
                    <div className='flip-card-inner'>
                      <div className='flip-card-front fa-8x'>                    
                        <FontAwesomeIcon icon={faLinux}/>                                              
                      </div>
                      <div className='flip-card-back fa-8x'>
                        <FontAwesomeIcon icon={faLinux} color='#333333' beat/>                    
                      </div>                    
                    </div>
                  </div>
                  <div className='flip-card'>                             
                    <div className='flip-card-inner'>
                      <div className='flip-card-front fa-8x'>                    
                        <FontAwesomeIcon icon={faUbuntu}/>                                               
                      </div>
                      <div className='flip-card-back fa-8x'>
                        <FontAwesomeIcon icon={faUbuntu} color='#e95420' beat/>                    
                      </div>                     
                    </div>
                  </div>                                                         
                                                                          
              </div>                  
              </div>
              </div>
                        
        </div>

        </div> 
        <Loader type = "ball-scale-multiple"/>
    </>
    )
}

export default  Skills










