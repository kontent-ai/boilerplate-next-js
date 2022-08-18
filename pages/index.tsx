import styles from '../styles/Home.module.css'
import { getHeroUnit } from "../lib/kontentClient";
import { GetStaticProps, NextPage } from 'next';
import { HeroUnit } from '../models/content-types/hero_unit';

const Home: NextPage<IndexProps> = ({ heroUnit }) => {
  return (
    <main >
      <div className={styles.hero}>
        <h1 className="append-dot">{heroUnit.elements.title.value}</h1>
        <div className={styles.summary} dangerouslySetInnerHTML={{ __html: heroUnit.elements.marketingMessage.value }}>
        </div>
      </div>
    </main>
  )
}

export default Home

interface IndexProps {
  heroUnit: HeroUnit;
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const heroUnit = await getHeroUnit();

  return {
    props: { heroUnit },
  };
}