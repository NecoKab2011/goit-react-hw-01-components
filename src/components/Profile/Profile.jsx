import PropTypes from "prop-types";

import { Avatar } from "./Avatar/Avatar.jsx";
import { Username } from "./Username/Username.jsx";
import { Tag } from "./Tag/Tag.jsx";
import { Location } from "./Location/Location.jsx";
import { Stats } from "./Stats/Stats.jsx";

export const Profile = ({ avatar, username, tag, location, stats }) => {
return (
    <div>
     <div>
        <Avatar avatar={avatar} />
        <Username username={username} />
        <Tag tag={tag} />
        <Location location={location} />
      </div>
      <Stats stats={stats} />
    </div>
)
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  stats: PropTypes.object.isRequired,
};