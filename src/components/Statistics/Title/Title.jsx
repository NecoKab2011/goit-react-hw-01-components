import styles from "./Title.module.scss";

export const Title = ({ title }) => {
  if (!title) {
    return <></>;
  } else {
    return <h2 className={styles.title}>{title}</h2>;
  }
};