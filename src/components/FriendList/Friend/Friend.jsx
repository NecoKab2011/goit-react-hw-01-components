import PropTypes from "prop-types";
import styles from "./Friend.module.scss";

export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={styles.status} data-online={isOnline}></span>
      <img className={styles.avatar} width={200} src={avatar} alt={name} />
      <p className={styles.name}>{name}</p>
    </>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};