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
            strArray={'Hey, I\'m David'.split('')}
            idx={15}
          />
        </h1>
        <p>The public good was what I was taught at a young age. I went to college at California State University Northridge, where I graduated with a BA in Philosophy.</p>
        <p>Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Nunc consequat interdum varius sit amet mattis. Leo in vitae turpis massa. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. In metus vulputate eu scelerisque felis imperdiet. Non curabitur gravida arcu ac tortor. Nibh cras pulvinar mattis nunc sed blandit. Iaculis urna id volutpat lacus laoreet non curabitur. Lorem donec massa sapien faucibus et molestie ac. Velit ut tortor pretium viverra suspendisse potenti. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Sed elementum tempus egestas sed sed risus. Facilisi nullam vehicula ipsum a arcu cursus vitae. Augue eget arcu dictum varius duis. Volutpat consequat mauris nunc congue nisi. Laoreet sit amet cursus sit. Cursus sit amet dictum sit.</p>
        <p>Maecenas pharetra convallis posuere morbi leo urna. Venenatis cras sed felis eget. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Malesuada proin libero nunc consequat interdum varius. Senectus et netus et malesuada fames ac turpis. Ridiculus mus mauris vitae ultricies leo integer malesuada. Velit aliquet sagittis id consectetur purus ut faucibus. Mi eget mauris pharetra et. Diam in arcu cursus euismod quis viverra nibh cras. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Facilisi nullam vehicula ipsum a arcu cursus vitae. Mauris rhoncus aenean vel elit. Tempor orci eu lobortis elementum. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis.</p>
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