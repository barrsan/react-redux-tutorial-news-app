import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '@components/Header';
import { Search } from '@components/Search';
import { NewsFeed } from '@components/NewsFeed';
import { LoadMoreButton } from '@components/LoadMoreButton';
import { topNewsActions } from '@redux/actions';
import { topNewsSelectors } from '@redux/selectors';

const App = () => {
  const isLoading = useSelector(topNewsSelectors.selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(topNewsActions.getPosts());
  }, []);

  return (
    <div className="container max-w-4xl mx-auto px-4">
      <Header />
      <Search />
      <NewsFeed />
      <LoadMoreButton isLoading={isLoading} />
    </div>
  );
};

export default App;
