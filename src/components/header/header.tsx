import styles from './header.module.css';

type HeaderProps = {
  containerClass: string;
};

const Header = ({ containerClass }: HeaderProps) => {
  return (
    <header className={`${styles.main__header} ${styles.header}`}>
      <div className={containerClass}></div>
    </header>
  );
};

export default Header;
