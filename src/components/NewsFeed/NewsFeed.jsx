import { Loader } from '@components/Loader';
import NewsFeedItem from './NewsFeedItem';

const NewsFeed = ({ items = [], isLoading = false }) => {
  if (!items.length && !isLoading) {
    return <div className="py-3">Posts not found</div>;
  }

  if (isLoading) {
    return (
      <div className="py-3 flex flex-col items-center">
        <Loader isDark width={10} />
      </div>
    );
  }

  return (
    <div className="py-3">
      {items.map((i) => (
        <NewsFeedItem
          key={i.url}
          title={i.title}
          description={i.description}
          image={i.urlToImage}
        />
      ))}
    </div>
  );
};

export default NewsFeed;
