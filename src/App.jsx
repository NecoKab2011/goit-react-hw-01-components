import styles from "./App.module.scss";

import user from "./info-data/user.json";
import { Profile } from "./components/Profile/Profile";
import stats from "./info-data/statistics.json";
import { Statistics } from "./components/Statistics/Statistics";
import friends from "./info-data/friends.json";
import { FriendList } from "./components/FriendList/FriendList";
import transactions from "./info-data/transactions.json";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <div className={styles.main}>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
