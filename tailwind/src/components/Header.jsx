import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="w-screen h-[70vh] bg-[url('src/assets/background.jpg')] bg-cover bg-no-repeat bg-center font-arial lg:h-[93vh] after:content-[''] after:w-full after:h-[70vh] after:absolute after:top-0 after:left-0 after:bg-[#00000099] after:shadow-inner after:lg:h-[93vh]">
      <img
        src="src/assets/logo.png"
        className="w-[170px] absolute mt-8 ml-14 lg:ml-0 lg:left-2/4 lg:translate-x-[-50%] z-50"
      />
      <button className="absolute right-0 py-[3px] px-4 mt-10 mr-12 rounded-[5px] bg-[#e50914] text-white z-50 hover:opacity-[0.9] ease-in duration-200">
        Sign in
      </button>

      <div className="w-full h-full relative flex justify-center items-center text-white z-10">
        <div className="w-full text-center">
          <h1 className="text-[40px] font-bold mb-5 md:text-[60px] lg:text-[80px]">
            See what&apos;s next
          </h1>
          <h2 className="text-[16px] mb-12 md:text-[24px] lg:text-[32px]">
            WATCH ANYWHERE. CANCEL ANYTIME.
          </h2>
          <a className="w-[250px] p-5 bg-[#e50914] hover:opacity-[0.9] ease-in duration-200 cursor-pointer md:text-[24px] lg:text-[32px]">
            WATCH FREE FOR 30 DAYS
            <span className="ml-3">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
