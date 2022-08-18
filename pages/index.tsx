import styles from '../styles/Home.module.css'
import { getHeroUnit } from "../lib/kontentClient";

export default function Home({ heroUnit }) {
  return (
    <main >
      <div className={styles.hero}>
        <h1 className="append-dot">{heroUnit.headline}</h1>
        <div className={styles.summary} dangerouslySetInnerHTML={{ __html: heroUnit.summary }}>
        </div>
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const heroUnit = await getHeroUnit();

  return {
    props: { heroUnit },
  };
}