import styles from './ProjectsStyles.module.css';
import discogs from '../../assets/discogs.png';
import lastfm from '../../assets/lastfm.png';
import applemusic from '../../assets/applemusic.png';
import gaming from '../../assets/gaming.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <div>
      <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Stuff</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={discogs}
            link="https://www.discogs.com/user/Jonesyriffic/collection?header=1"
            h3="Discogs"
            p="My vinyl collection"
          />
          <ProjectCard
            src={lastfm}
            link="https://www.last.fm/user/jonesyriffic"
            h3="last.fm"
            p="What I've been listening to"
          />
          <ProjectCard
            src={applemusic}
            link="https://music.apple.com/gb/playlist/replay-2024/pl.rp-8AnxsNdQEzw1"
            h3="Apple Music Replay"
            p="On repeat this year"
          />
          <ProjectCard
            src={gaming}
            link="https://www.trueachievements.com/gamer/Jonesyriffic"
            h3="TrueAchievements"
            p="What I've been playing"
          />
        </div>
      </section>
    </div>
  );
}

export default Projects;
