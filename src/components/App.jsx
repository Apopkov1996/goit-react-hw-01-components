import { Profile } from './profile/Profile';
import dataUser from '../assets/user.json';
import { Statistics } from './statistics/Statistics';
import dataStatistics from '../assets/data.json';
import { Friends } from './friends/Friends';
import dataFriends from '../assets/friends.json';
import { Transactions } from './transaction-history/Transactions';
import dataTransactions from '../assets/transactions.json';
import appCss from './App.module.css';

export const App = () => {
  return (
    <div className={appCss.wrapper}>
      <Profile dataUser={dataUser} />
      <Statistics title="UPLOAD STATS" dataStatistics={dataStatistics} />
      <Friends dataFriends={dataFriends} />
      <Transactions dataTransactions={dataTransactions} />
    </div>
  );
};
