import styles from "./Tag.module.scss";

export const Tag = ({ tag }) => {
  return <p className={styles.tag}>@{tag}</p>;
};