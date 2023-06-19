import PropTypes from 'prop-types';
import userCss from './user.module.css'

export const UserInfo = ({avatar, username, tag, location, followers, views, likes}) => {
  return (
    <div className={userCss.profile}>
      <div className="description">
        <img src={avatar} alt="User avatar" className={userCss.avatar}/>
        <p className={userCss.name}>Jacques Gluke</p>
        <p className={userCss.tag}>@{tag}</p>
        <p className={userCss.location}>{location}</p>
      </div>
      <ul className={userCss.stats}>
        <li className={userCss.item}> 
          <span className={userCss.label}>Followers</span>
          <span className={userCss.quantity}>{followers}</span>
        </li>
        <li className={userCss.item}>
          <span className={userCss.label}>Views</span>
          <span className={userCss.quantity}>{views}</span>
        </li>
        <li className={userCss.item}>
          <span className={userCss.label}>Likes</span>
          <span className={userCss.likes}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

UserInfo.prototype = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
};
