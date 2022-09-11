import { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact
} from '@fortawesome/free-brands-svg-icons';
import { Loader } from 'react-loaders';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Hi, my name\'s David'.split('')}
            idx={15}
          />
        </h1>
        <p>I'm a self-competitive guy, and joining the federal workforce after university was unlike me. I enjoyed helping citizens navigate through the processes at both immigration services and afterwards at the postal service, but I found myself looking forward to the paycheck more than the experience.</p>
        <p>Eventually I found the growth I was looking for in quality assurance. At MnSoft, we sold map updates and I had no background in computer science, so I quickly made some friends and developed the technical know-how needed to get the work done. I was regularly exposed to the software development process and contributing to the design, planning, and manual testing part of it. It was seriously fun, and I wanted to know more.</p>
        <p>Fast forward to the middle of COVID, and I enrolled into Hack Reactor, a 13-week software engineering bootcamp consisting of over 1000 hours of full stack development in an AGILE environment.</p>
        <p>In 4 months, I went from introductory CompSci courses at college to a full understanding of the development process and its history.</p>
        <p>Check out my portfolio to see what I can do.</p>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faAngular} color='#DD0031' />
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faGitAlt} color='#EC4B28' />
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default About