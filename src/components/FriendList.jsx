import PropTypes from 'prop-types'
import {FriendListItem} from './FriendListItem';
import css from './friends.module.css'

export const FriendList = ({friends}) => {
  return (
    <ul className={css.list}>
      {friends.map(({avatar, id, isOnline, name}) => (
        <FriendListItem
        avatar= {avatar}
        key= {id}
        isOnline={isOnline}
        name={name}
        />
      ))}
  </ul>
  )  
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };


  