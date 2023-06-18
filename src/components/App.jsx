import { Profile } from './Profile';
import user from './Profile/user.json';
// import { Statistics } from './Statistics';
import { Statistics } from './Statistics/Statistics.jsx';
import stat from './Statistics/statistics.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
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
      ></Profile>
      <Statistics stat={stat}></Statistics>
    </div>
  );
};
