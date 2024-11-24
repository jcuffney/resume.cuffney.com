import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
      </header>
      <main className={styles.main}>
        <h2 className={styles.headline}>
          <span className={styles.brackets}>{"{"}{"{"}</span>
          <span>Joe Cuffney | Resume</span>
          <span className={styles.brackets}>{"}"}{"}"}</span>
        </h2>
      </main>
      <footer>
      </footer>
    </div>
  );
}
