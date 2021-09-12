import NewsFeedItem from './NewsFeedItem';

const NewsFeed = ({ items = [] }) => {
  if (items.length) {
    return <div className="py-3">Posts not found</div>;
  }

  return (
    <div className="py-3">
      <NewsFeedItem />
    </div>
  );
};

export default NewsFeed;
