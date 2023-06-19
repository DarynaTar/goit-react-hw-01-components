import { UserInfo } from '../components/user';
import user from '../data/user';

import data from '../data/data';
import { Statistics } from './statistics';

import friends from '../data/friends'
import {FriendList} from './FriendList'

import transactions from '../data/transactions'
import {TransactionHistory} from './transationHistory';


export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
    >
      <UserInfo
        userName={user.userName}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />;

      <TransactionHistory items={transactions} />;
    </div>


  );
};

