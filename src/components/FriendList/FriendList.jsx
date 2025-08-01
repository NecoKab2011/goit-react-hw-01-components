import PropTypes from "prop-types";
import styles from "./Friend.module.scss";
import { Friend } from "./Friend/Friend";

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friends}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={styles.friends__item} key={id}>
          <Friend avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.object.isRequired,
};