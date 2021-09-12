const NewsFeedItem = () => (
  <div className="py-4 w-full">
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row flex-wrap content-center">
        <img
          className="block h-60 md:h-full w-full md:w-6/12 object-cover object-center"
          src="https://dummyimage.com/720x400"
          alt="blog"
        />
        <div className="block p-6 w-full md:w-6/12">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            CATEGORY
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            The Catalyzer
          </h1>
          <p className="leading-relaxed mb-3">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default NewsFeedItem;
