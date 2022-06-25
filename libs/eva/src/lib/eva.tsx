import styles from './eva.module.css';

/* eslint-disable-next-line */
export interface EvaProps {}

export function Eva(props: EvaProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Eva!</h1>
    </div>
  );
}

export default Eva;
