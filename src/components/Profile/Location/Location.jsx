import styles from "./Location.module.scss";

export const Location = ({ location }) => {
  return (
    <p className={styles.location}>
      {location.city}, {location.country}
    </p>
  );
};