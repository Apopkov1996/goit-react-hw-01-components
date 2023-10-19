import profileCss from './profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ dataUser }) => {
  const { username, tag, location, avatar, stats } = dataUser;
  return (
    <div className={profileCss.profile}>
      <div className={profileCss.description}>
        <img src={avatar} alt={username} className={profileCss.avatar} />
        <p className={profileCss.name}>{username}</p>
        <p className={profileCss.tag}>@{tag}</p>
        <p className={profileCss.location}>{location}</p>
      </div>

      <ul className={profileCss.stats}>
        <li className={profileCss.item}>
          <span className={profileCss.label}>Followers</span>
          <span className={profileCss.quantity}>{stats.followers}</span>
        </li>
        <li className={profileCss.item}>
          <span className={profileCss.label}>Views</span>
          <span className={profileCss.quantity}>{stats.views}</span>
        </li>
        <li className={profileCss.item}>
          <span className={profileCss.label}>Likes</span>
          <span className={profileCss.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  dataUser: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};
