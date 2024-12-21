import { Button } from "@/components/Button";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.banner}>
        <h2 className={styles.banner__title}>Boost your links today</h2>
        <Button variant="rounded" asChild>
          <a href="#">Get Started</a>
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
