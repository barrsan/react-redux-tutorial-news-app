const NewsFeedItem = ({ title, description, image }) => (
  <div className="py-4 w-full">
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row flex-wrap content-center">
        <img
          className="block h-60 md:h-full w-full md:w-6/12 object-cover object-center"
          src={image}
          alt={title}
        />
        <div className="block p-6 w-full md:w-6/12">
          <h3 className="title-font font-medium text-gray-900 mb-3 text-2xl">
            {title}
          </h3>
          <p className="leading-relaxed mb-3">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

export default NewsFeedItem;
