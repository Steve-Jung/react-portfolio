import React, { useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

// data
import portfolios from '../data/portfolios';
import projects from '../data/projects';

const Navigation = ({ menuState }) => {
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let portfolioBackground = useRef(null);
  let portfolioRefs = useRef([]);

  useEffect(() => {
    if (menuState.clicked === false) {
      // close our menu
      // menu.style.display = 'none';
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: 'power3.inOut',
        stagger: {
          amount: 0.07
        }
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: 'none'}
      });
    } else if (
      menuState.clicked === true ||
      menuState.clicked === true && menuState.initial === null) {
      // Open our menu
      // menu.style.display = 'block';
      gsap.to(menu, {
        duration: 0,
        css: { display: 'block'}
      });
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: '100%'
      });
      staggerReveal(revealMenuBackground, revealMenu);
      staggerText(portfolioRefs.current);
    }
  }, [menuState]);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: 'right top',
      skewY: 2,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.1
      }
    });
  };

  const staggerText = (ref) => {
    gsap.from([ref[0], ref[1], ref[2], ref[3], ref[4], ref[5]], {
      duration: 0.8,
      y: 100,
      delay: 0.1,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.3
      }
    });
  };

  const addToPortfolioRefs = (el) => {
    if (portfolioRefs.current.length < 6) {
      portfolioRefs.current.push(el);
    }
  };

  const handlePortfolio = useCallback((image) => {
    gsap.from(portfolioBackground.current, {
      duration: 0.4,
      skewY: 0.5,
      transformOrigin: 'right top'
    });
    gsap.to(portfolioBackground.current, {
      duration: 0,
      backgroundImage: `url('${image}')`
    });
    gsap.to(portfolioBackground.current, {
      duration: 0.4,
      opacity: 0.7,
      skewY: 0,
      ease: 'power3.inOut'
    });
  }, []);

  const handlePortfolioReturn = useCallback(() => {
    gsap.to(portfolioBackground.current, {
      duration: 0.4,
      opacity: 0
    });
  }, []);

  const handleHover = (e, image) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: 'power3.inOut'
    });
    handlePortfolio(image);
  }

  const handleHoverExit = e => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: 'power3.inOut'
    });
    handlePortfolioReturn();
  }

  return (
    <div ref={el => menu = el} className='navigation-menu'>
      <div ref={el => revealMenuBackground = el} className='menu-secondary-background-color'></div>
      <div ref={el => revealMenu = el} className='menu-layer'>
        <div ref={portfolioBackground} className='menu-portfolio-background'></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  {portfolios.map((portfolio) => (
                    <li
                      key={portfolio.id}
                      onMouseOver={(e) => handleHover(e, portfolio.footerImage)}
                      onMouseOut={(e) => handleHoverExit(e)}
                    >
                      <Link href={`/portfolio/${portfolio.page}`}>
                        <a ref={addToPortfolioRefs}>{portfolio.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="menu-projects">
              {projects.map((project) => (
                <div
                  key={project.id}
                  onMouseOver={() => handlePortfolio(project.headerImage)}
                  onMouseOut={handlePortfolioReturn}
                >
                  <Link href={`/project/${project.page}`}>
                    <a>{project.name}</a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
