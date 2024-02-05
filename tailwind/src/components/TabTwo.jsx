export default function TabTwo() {
  return (
    <div className="flex flex-col items-center py-16">
      <div className="w-[75%] flex flex-col items-center md:flex-row md:justify-between md:mb-10">
        <p className="w-[90%] text-xl text-center md:w-[60%] md:text-left lg:text-3xl">
          Watch TV shows and movies anytime, anywhere — personalized for you.
        </p>
        <a className="w-[240px] px-3 py-2 mt-5 mb-8 text-center bg-[#e50914] hover:opacity-[0.9] ease-in duration-200 cursor-pointer md:w-[35%]">
          WATCH FREE FOR 30 DAYS
        </a>
      </div>

      <div className="w-[65%] text-center md:flex md:flex-row md:w-[80%] md:items-center">
        <div className="mr-5 md:flex md:flex-col md:items-center">
          <img src="src/assets/tab-content-2-1.png" className="mb-5" />
          <p className="text-xl mb-4">Watch on your TV</p>
          <p className="text-[#999] mb-10 leading-5">
            Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players
            and more.
          </p>
        </div>

        <div className="md:flex md:flex-col md:items-center mr-5">
          <img src="src/assets/tab-content-2-2.png" className="mb-5" />
          <p className="text-xl mb-4">Watch instantly or download for later</p>
          <p className="text-[#999] mb-10 leading-5">
            Available on phone and tablet, wherever you go.
          </p>
        </div>

        <div className="md:flex md:flex-col md:items-center">
          <img src="src/assets/tab-content-2-3.png" className="mb-5" />
          <p className="text-xl mb-4">Use any computer</p>
          <p className="text-[#999] mb-10 leading-5">
            Watch right on Netflix.com
          </p>
        </div>
      </div>
    </div>
  );
}
