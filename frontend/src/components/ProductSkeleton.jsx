import React from 'react';

const ProductSkeleton = () => {
  return (
    <div className="product-skeleton animate-pulse bg-white shadow-md rounded p-4 w-full max-w-sm">
      <div className="skeleton-image bg-gray-300 rounded h-40 w-full mb-4"></div>
      <div className="skeleton-text bg-gray-300 h-4 w-3/4 mb-2 rounded"></div>
      <div className="skeleton-text bg-gray-300 h-4 w-1/2 mb-2 rounded"></div>
      <div className="skeleton-price bg-gray-300 h-4 w-1/4 rounded"></div>
    </div>
  );
};

export default ProductSkeleton;
