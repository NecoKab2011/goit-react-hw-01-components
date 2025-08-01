import styles from "./Avatar.module.scss";

export const Avatar = ({ avatar }) => {
  return <img className={styles.avatar} width={200} src={avatar} alt="avatar" />;
};