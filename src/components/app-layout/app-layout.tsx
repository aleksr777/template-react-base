import styles from './app-layout.module.css';
import Header from '../header/header';
import Content from '../content/content';
import Footer from '../footer/footer';

const AppLayout = () => {

  return (
    <div className={styles.main}>
      <Header containerClass={styles.main__container} />
      <Content containerClass={styles.main__container} />
      <Footer containerClass={styles.main__container} />
    </div>
  );
};

export default AppLayout;
