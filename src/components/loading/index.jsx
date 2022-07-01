import styles from './index.module.scss';
function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.loading_center}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Loading;
