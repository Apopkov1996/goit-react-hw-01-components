import { Profile } from './profile/Profile';
import dataUser from '../assets/user.json';
import { Statictics } from './statistics/Statistics';
import dataStatistics from '../assets/data.json';
import { Friends } from './friends/Friends';
import dataFriends from '../assets/friends.json';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101'
    // }}
    >
      <Profile dataUser={dataUser} />
      <Statictics title="UPLOAD STATS" dataStatistics={dataStatistics} />
      <Friends dataFriends={dataFriends} />
    </div>
  );
};
