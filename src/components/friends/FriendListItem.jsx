import PropTypes from 'prop-types';
import css from './friendsListItem.module.css';

export const FriendListItem = ({ isOnline, avatar, name, id }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

// FriendListItem.propTypes = {
//   friends: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
//   }).isRequired,
// };

FriendListItem.prototype = {
  key: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
