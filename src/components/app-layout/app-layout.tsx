import styles from './app-layout.module.css';
import Header from '../header/header';
import Content from '../content/content';
import Footer from '../footer/footer';

const AppLayout = () => {
  const containerClass = `${styles.main__container} ${styles.container}`;

  return (
    <div className={styles.main}>
      <Header containerClass={containerClass} />
      <Content containerClass={containerClass} />
      <Footer containerClass={containerClass} />
    </div>
  );
};

export default AppLayout;
