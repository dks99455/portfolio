import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { Loader } from 'react-loaders';
import theCrew from '../../assets/images/mnsoftcrew.jpeg';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['David', ' ', 'Sung']
  const jobArray = ['Web', ' ', 'Developer']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>
        <AnimatedLetters letterClass={letterClass}
        strArray={nameArray}
        idx={15} />
        <br />
        <AnimatedLetters letterClass={letterClass}
        strArray={jobArray}
        idx={22} />
        </h1>
        <h2>And overall cool dude.</h2>
        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
      </div>
      <div className='img-container'>
        <img className='homepic' src={theCrew} alt='friends' />
        <div className='middle'>
          <div className='thatisme'>That's me. Second from the left.</div>
        </div>
      </div>
    </div>
    <Loader type="line-scale" />
    </>
  )
}

export default Home