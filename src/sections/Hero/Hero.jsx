import styles from './HeroStyles.module.css';
import heroImg from '../../assets/avatar.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import blueskyLight from '../../assets/bluesky-light.svg';
import blueskyDark from '../../assets/bluesky-dark.svg';
import instagramLight from '../../assets/instagram-light.svg';
import instagramDark from '../../assets/instagram-dark.svg';
import xboxLight from '../../assets/xbox-light.svg';
import xboxDark from '../../assets/xbox-dark.svg';
import applemusicLight from '../../assets/applemusic-light.svg'
import applemusicDark from '../../assets/applemusic-dark.svg'
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const blueskyIcon = theme === 'light' ? blueskyLight : blueskyDark;
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;
  const xboxIcon = theme === 'light' ? xboxLight : xboxDark;
  const applemusicIcon = theme === 'light' ? applemusicLight : applemusicDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Andrew Jones"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Andrew
          <br />
          Jones
        </h1>
        <h2>Digital Product Innovation Manager</h2>
        <span>
          <a href="https://bsky.app/profile/andrewjones.uk" target="_blank">
            <img src={blueskyIcon} alt="Bluesky icon" />
          </a>
          <a href="https://www.instagram.com/jonesyriffic" target="_blank">
            <img src={instagramIcon} alt="Instagram icon" />
          </a>
          <a href="https://account.xbox.com/en-GB/Profile?gamerTag=jonesyriffic" target="_blank">
            <img src={xboxIcon} alt="Xbox icon" />
          </a>
          <a href="https://music.apple.com/profile/jonesyriffic" target="_blank">
            <img src={applemusicIcon} alt="Apple Music icon" />
          </a>
        </span>
        <p className={styles.description}>
          Researching and developing new digital service product innovations.
        </p>
        <a href="https://linktr.ee/Jonesyriffic" target="_blank">
          <button className="hover">More Links</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
