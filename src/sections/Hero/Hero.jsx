import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import blueSkyLight from '../../assets/bluesky-light.svg';
import blueSkyDark from '../../assets/bluesky-dark.svg';
import instagramLight from '../../assets/instagram-light.svg';
import instagramDark from '../../assets/instagram-dark.svg';
import moreLinksLight from '../../assets/links-light.svg';
import moreLinksDark from '../../assets/links-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const blueSkyIcon = theme === 'light' ? blueSkyLight : blueSkyDark;
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;
  const moreLinksIcon = theme === 'light' ? moreLinksLight : moreLinksDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Andrew Jones"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Colour mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Andrew
          <br />
          Jones
        </h1>
        <h2>Digital Innovation Manager</h2>
        <span>
          <a href="https://bsky.app/profile/andrewjones.uk" target="_blank">
            <img src={blueSkyIcon} alt="BlueSky icon" />
          </a>
          <a href="https://www.instagram.com/jonesyriffic" target="_blank">
            <img src={instagramIcon} alt="Instagram icon" />
          </a>
          <a href="https://links.andrewjones.uk" target="_blank">
            <img src={moreLinksIcon} alt="More Links icon" />
          </a>
        </span>
        <p className={styles.description}>
          📍 London, UK
          <br />
          🏴󠁧󠁢󠁷󠁬󠁳󠁿 Welsh
          <br />
          🏳‍🌈 Gay, He/Him
          <br />
          🎮 Xbox, Playstation, PC
          <br />
          🎲 DnD Beginner
          <br />
          🤓 Geek
        </p>
      </div>
    </section>
  );
}

export default Hero;
