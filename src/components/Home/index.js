import { Link } from 'react-router-dom';
import LogoSun from '../../assets/images/sun-logo.png'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react'
import './index.scss';
import Loader from 'react-loaders';

const Home = () => {
    const[lettersClass, setLettersClass] = useState ('text-animate')
    const nameArray = ['B','r','y','a','n','','R','o','c','h','a']
    const jobArray = ['C','o','m','p','u','t','e','r','','S','c','i','e','n','t','i','s','t','.']

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLettersClass('text-animate-hover')
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])


  

    return (
      <>
      
        
          <div className="container home-page">
            <div className="text-zone">
              <h1>
                
               
                <AnimatedLetters
                  lettersClass={lettersClass}
                  strArray={nameArray}
                  idx={19}
                />
                <br />
                <AnimatedLetters
                  lettersClass={lettersClass}
                  strArray={jobArray}
                  idx={17}
                />
              </h1>
              <h2>Programming/ Cyber Security / Web Develoment</h2>
              <Link to="/contact" className="flat-button">
                CONTACT ME
              </Link>
              
              
            </div>
            <div className='logo-container'>
            <img src={LogoSun} alt='my-logo'/>
            

            </div>
            
            
          
          </div>
         
          <Loader type='ball-scale-multiple'/>
          </>
          
                              
      )
    }
    
    export default Home