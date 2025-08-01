import styles from "./Username.module.scss";

export const Username = ({ username }) => {
  return <h2 className={styles.username}>{username}</h2>;
};