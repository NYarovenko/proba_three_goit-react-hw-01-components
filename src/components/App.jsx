import user from 'data/user.json';
import data from 'data/data.json';

import { Profile } from './Profile';
import { Statistics } from './statistics/Statistics';

export const App = () => {
  return (
    <div
      style={{
        marginTop: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
    </div>
  );
};
