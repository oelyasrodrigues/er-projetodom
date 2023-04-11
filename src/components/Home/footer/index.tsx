import styles from "./styles.module.scss";

export default function Footer() {
  const data = new Date();

  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.name}>
          <a href="https://elyasrodrigues.vercel.app" target={"_blank"}>Elyas Rodrigues</a>
        </p>
        <p className={styles.year}>
          &copy; {data.getFullYear()}
        </p>
      </div>
    </footer>
  );
}
