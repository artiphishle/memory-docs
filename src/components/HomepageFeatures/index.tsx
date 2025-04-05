import type {ReactNode} from 'react';
import styles from './styles.module.css';
import imgFeatures from "@site/static/img/features.png";

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <img style={{margin: 'auto'}} src={imgFeatures} alt="Features" />
        </div>
      </div>
    </section>
  );
}
