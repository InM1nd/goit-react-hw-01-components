import Profile from './components/Profile/profile';
import Statistics from './components/Statistics/statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

import user from './components/data/user.json';
import data from './components/data/data.json';
import friends from './components/data/friends.json';
import transactions from './components/data/transactions.json';

export default function App() { 
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics title="Upload stats" stats={data} />
<FriendList friends={friends} />
<TransactionHistory data={transactions} />
</div>

);
}