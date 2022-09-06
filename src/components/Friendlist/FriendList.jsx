import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friend__list}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id} >
          <span className= {`${s.status} ${friend.isOnline ? s.online : s.offline}`} >
          </span>
          <img
            className={s.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
 friends: PropTypes.array,
};


export default FriendList;
// можна було такий синтаксис (початок)
// const FriendList = (props) => { - без фігурних дужок ми закидаємо пропси
//   return (
//     <ul className="friend-list">
//       {props.friends.map(friend => ( - і тут тоді теж пропси