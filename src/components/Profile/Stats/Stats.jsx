import styles from "./Stats.module.scss";

export const Stats = ({ stats }) => {
  return (
    <ul className={styles.stats}>
      <li className={styles.stats__item}>
        <span className={styles.stats__info}>Followers</span>
        <span className={styles.stats__quantity}>{stats.followers}</span>
      </li>
      <li className={styles.stats__item}>
        <span className={styles.stats__info}>Views</span>
        <span className={styles.stats__quantity}>{stats.views}</span>
      </li>
      <li className={styles.stats__item}>
        <span className={styles.stats__info}>Likes</span>
        <span className={styles.stats__quantity}>{stats.likes}</span>
      </li>
    </ul>
  );
};