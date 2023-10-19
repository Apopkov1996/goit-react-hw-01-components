import fcss from './friends.module.css';
import PropTypes from 'prop-types';

export const Friends = ({ dataFriends }) => {
  return (
    <ul className={fcss.list}>
      {dataFriends.map(({ avatar, name, isOnline, id }) => (
        <li className={fcss.item} key={id}>
          <span
            style={{ backgroundColor: isOnline ? 'green' : 'red' }}
            className={fcss.status}
          ></span>
          <img className={fcss.avatar} src={avatar} alt={name} width="48" />
          <p className={fcss.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

Friends.propTypes = {
  dataFriends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
