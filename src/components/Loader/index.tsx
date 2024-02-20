import { ReactNode } from 'react';
import styles from './Loader.module.scss';

interface ILoaderProps {
  type: 'center' | 'component';
  text?: string | ReactNode;
}

const Loader = ({ type, text }: ILoaderProps) => {
  if (type === 'center') {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loaderIcon} />
        {text}
      </div>
    );
  }
  return (
    <div className={styles.componentContainer}>
      <div className={styles.loaderIcon} />
      {text}
    </div>
  );
};

export default Loader;
