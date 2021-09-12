import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '@components/Header';
import { Search } from '@components/Search';
import { NewsFeed } from '@components/NewsFeed';
import { LoadMoreButton } from '@components/LoadMoreButton';
import { topNewsActions } from '@redux/actions';
import { topNewsSelectors, searchNewsSelectors } from '@redux/selectors';

const App = () => {
  const dispatch = useDispatch();

  const topNewsItems = useSelector(topNewsSelectors.selectPosts);
  const searchNewsItems = useSelector(searchNewsSelectors.selectPosts);
  const searchString = useSelector(searchNewsSelectors.selectSearchString);
  const isLoadingTopNews = useSelector(topNewsSelectors.selectIsLoading);
  const isLoadingSearchNews = useSelector(searchNewsSelectors.selectIsLoading);

  useEffect(() => {
    if (!topNewsItems.length) {
      dispatch(topNewsActions.getPosts());
    }
  }, []);

  return (
    <div className="container max-w-4xl mx-auto px-4 pb-8">
      <Header />
      <Search />
      <NewsFeed
        items={searchString ? searchNewsItems : topNewsItems}
        isLoading={searchString ? isLoadingSearchNews : isLoadingTopNews}
      />
      {searchString !== '' && (
        <LoadMoreButton isLoading={isLoadingSearchNews} />
      )}
    </div>
  );
};

export default App;
