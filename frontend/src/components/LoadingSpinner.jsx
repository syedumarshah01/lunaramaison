const LoadingSpinner = () => {
  return (
    <>

      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

      <div 
        className="w-16 h-16 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"
        style={{ animation: 'spin 1s linear infinite' }}
      ></div>
    </>
  );
};

export default LoadingSpinner