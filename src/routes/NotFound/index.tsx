import styles from './index.module.scss';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  );
}
