const TestnetButton = () => {
  return (
    <div className="relative z-0">
      <button
        className="bg-buttonpurple z-[10]
     flex justify-between items-center gap-2 lg:gap-4 rounded-xl py-3 px-4 lg:px-6 lg:py-4 xl:rounded-2xl "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="white"
          className="w-[17px] lg:w-[22px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
        <div className="download">Testnet Download</div>

      </button>
      <div className="absolute z-[-1] bg-darkpurple top-[-19px] right-0 rounded-xl xl:rounded-2xl px-[10px] pt-[3px] pb-[25px] text-white">
        <p className="text-[10px] font-500 font-poppins">Coming Soon</p>
      </div>
    </div>
  );
};

export default TestnetButton;
