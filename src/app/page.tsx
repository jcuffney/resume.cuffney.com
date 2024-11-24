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
        <section>
          <p>Experienced Lead Engineer with a demonstrated history of working with brands large and small to see creative ideas come to life. Language agnostic, and focused on problem solving, I apply my theoretical knowledge of Computer Science to a wide array of problems to find the best possible solution.</p>
        </section>
        <section>
          <h3>Experience</h3>
          <ul>
            <li>
              Coinbase
            </li>
          </ul>
        </section>

        {/* <button>Download PDF</button> */}
      </main>
      <footer>
      </footer>
    </div>
  );
}
