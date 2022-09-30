import { useEffect, useState } from "react";
import { Loader } from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import portfolioData from '../../data/portfolio.json';
import Cardpage from '../Cardpage';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const renderPortfolio = (portfolio) => {
    return (
      <div className='images-container'>
        {
          portfolio.map((project, index) => {
            return (
              <div className="image-box" key={index}>
                <img
                  src={project.cover}
                  className="portfolio-image"
                  alt="portfolio"
                />
                <div className="content">
                  <p className="title">{project.title}</p>
                  <h4 className="description">{project.technologies}</h4>
                  <Cardpage cover={project.cover} title={project.title} description={project.description} index={index} />
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }

  return (
    <>
    <div className='container portfolio-page'>
      <h1 className='page-title'>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={["Software", " ", "Applications"]}
          idx={15}
        />
      </h1>
      {renderPortfolio(portfolioData.portfolio)}
    </div>
    <Loader type="line-scale" />
    </>
  )
}

export default Portfolio;