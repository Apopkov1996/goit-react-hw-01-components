import { Profile } from './profile/Profile';
import dataUser from '../assets/user.json';
import { Statictics } from './statistics/Statistics';
import dataStatistics from '../assets/data.json';
import { Friends } from './friends/Friends';
import dataFriends from '../assets/friends.json';
import { Transactions } from './transaction-history/Transactions';
import dataTransactions from '../assets/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile dataUser={dataUser} />
      <Statictics title="UPLOAD STATS" dataStatistics={dataStatistics} />
      <Friends dataFriends={dataFriends} />
      <Transactions dataTransactions={dataTransactions} />
    </div>
  );
};
