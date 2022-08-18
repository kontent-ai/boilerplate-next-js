import styles from '../styles/Home.module.css'
import { getHeroItem } from "../lib/kontentClient";

export default function Home({ heroItem }) {
  return (
    <main >
      <div className={styles.hero}>
        <h1 className="append-dot">{heroItem.headline}</h1>
        <div className={styles.summary} dangerouslySetInnerHTML={{ __html: heroItem.summary }}>
        </div>
        <div className="button">
          <a href={heroItem.cta_url}>{heroItem.cta_label}</a>
        </div>
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const heroItem = await getHeroItem();

  return {
    props: { heroItem },
  };
}