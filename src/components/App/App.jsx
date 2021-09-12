import { Header } from '@components/Header';
import { Search } from '@components/Search';
import { NewsFeed } from '@components/NewsFeed';
import { LoadMoreButton } from '@components/LoadMoreButton';

const App = () => (
  <div className="container max-w-4xl mx-auto px-4">
    <Header />
    <Search />
    <NewsFeed />
    <LoadMoreButton />
  </div>
);

export default App;
