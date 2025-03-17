import xuberTexture2Large from '~/assets/xuber.webp';
import xuberTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import xuberTexture2 from '~/assets/xuber.webp';
import xuberTextureLarge from '~/assets/xuber.webp';
import xuberTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import xuberTexture from '~/assets/xuber.webp';
import frontieTextureLarge from '~/assets/frontier.png';
import frontierTexturePlaceholder from '~/assets/frontier-placeholder.jpg';
import frontierTexture from '~/assets/frontier.png';
import tylerTextureLarge from '~/assets/tyler.jpeg';
import tylerTexturePlaceholder from '~/assets/tyler-placeholder.png';
import tylerTexture from '~/assets/tyler.jpeg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Software Engineer + Frontend Developer',
    description: `Portfolio of ${config.name} — a software engineer working on web applications with a focus on frontend development, UI/UX, and full-stack engineering.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Enterprise Permitting & Licensing"
        description="A comprehensive solution for local governments to manage permits and licenses efficiently."
        buttonText="View Project"
        buttonLink="https://www.tylertech.com/products/enterprise-permitting-licensing"
        model={{
          type: 'laptop',
          alt: 'Enterprise Permitting & Licensing',
          textures: [
            {
              srcSet: `${tylerTexture} 1280w, ${tylerTextureLarge} 2560w`,
              placeholder: tylerTexturePlaceholder,
            },
          ],
        }}
      />
      
      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Xuber - Insurance Software for the Global Commercial Market"
        description="Design and development for a Insurance Software built in Angular and .NET"
        buttonText="View project"
        buttonLink="http://xuber.com"
        model={{
          type: 'laptop',
          alt: 'Xuber App',
          textures: [
            {
              srcSet: `${xuberTexture} 375w, ${xuberTextureLarge} 750w`,
              placeholder: xuberTexturePlaceholder,
            },
            {
              srcSet: `${xuberTexture2} 375w, ${xuberTexture2Large} 750w`,
              placeholder: xuberTexture2Placeholder,
            },
          ],
        }}
      />
      
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Frontier Onboarding"
        description="Employee onboarding software streamlines and automates the tasks associated with hiring new people, replacing slow, manual, and repetitive paper-based processes with a seamless digital experience"
        buttonText="View project"
        buttonLink="https://www.frontiersoftware.com/module/onboarding"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${frontierTexture} 800w, ${frontieTextureLarge} 1920w`,
              placeholder: frontierTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
