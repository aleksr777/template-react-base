import styles from './footer.module.css';

type FooterProps = {
  containerClass: string;
};

const Footer = ({ containerClass }: FooterProps) => {
  return (
    <footer className={`${styles.main__footer} ${styles.footer}`}>
      <div className={containerClass}></div>
    </footer>
  );
};

export default Footer;
