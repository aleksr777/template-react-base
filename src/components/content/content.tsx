import styles from './content.module.css';

type ContentProps = {
  containerClass: string;
};

const Content = ({ containerClass }: ContentProps) => {
  return (
    <div className={`${styles.main__content} ${styles.content}`}>
      <div className={containerClass}></div>
    </div>
  );
};

export default Content;
