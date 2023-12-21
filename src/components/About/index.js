import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import {
  faAws,
    faHtml5,
    faJava,
    faJsSquare,
    faLinux,
    faPython
  } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'





const About= () => {
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
        
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    lettersClass={lettersClass}
                    strArray={['A','b','o','u','t','','m','e']} idx={15}/>
                </h1>
                <p>What should I say about me?. Let's keep it simple and honest.</p>
                <p>I am a computer scientist with a certification in cyber security, and I like challenges 
                  but only challenges that are worth completing, such as making a website, a video game, or software. 
                  In my opinion, these kinds of challenges are important because will test my abilities and help me improve myself 
                  in order to complete the challenge.</p>
                <p>That's all I have to say.</p>

            </div>
            <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} ccolor='#f89820' />
            </div>
            <div className="face2" >
              <FontAwesomeIcon icon={faPython} color='#4b8bbe' rotation={90}/>
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faAws} color='#ff9900' />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faHtml5} color='#e34c26' />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color='#f0db4f' />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faLinux} color='#333333'  />
            </div>
          </div>
        </div>

        </div> 
        <Loader type = 'ball-scale-multiple'/>
    </>
    )
}

export default  About