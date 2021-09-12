import { memo } from 'react';
import { Loader } from '@components/Loader';

const LoadMoreButton = ({
  isLoading = false,
  isDisabled = false,
  onClick = () => {},
}) => (
  <button
    className="flex flex-row items-center justify-center w-full mt-4 py-3 px-5 rounded-lg
      bg-blue-500 hover:bg-blue-600 
      text-white font-semibold transition-colors duration-200 ease-in-out
      disabled:opacity-50 disabled:bg-blue-500"
    type="button"
    disabled={isDisabled}
    onClick={onClick}
  >
    {isLoading && (
      <span>
        <Loader isDark={false} width={6} />
      </span>
    )}
    <span>Load More</span>
  </button>
);

export default memo(LoadMoreButton);
