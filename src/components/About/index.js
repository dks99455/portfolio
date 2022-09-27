import { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNodeJs,
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
            strArray={['Hi,', ' ', 'my', ' ', 'name\'s', ' ', 'David']}
            idx={15}
          />
        </h1>
        <p>I found my initial passion for tech in quality assurance at MnSoft. With no background in computer science, I made some friends and picked up the know-how needed to replicate bugs and submit feature requests. I was regularly exposed to the software development process and wanted to delve deeper into it.</p>
        <p>Fast forward to 2022, and I enrolled into Hack Reactor, a 13-week software engineering bootcamp consisting of over 1000 hours of full stack development in an AGILE environment.</p>
        <p>In a little over 5 months I went from taking introductory CompSci courses to a full understanding of the software development lifecycle.</p>
        <p>Please see what I've worked on in my portfolio.</p>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faNodeJs} color='#3C873A' />
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