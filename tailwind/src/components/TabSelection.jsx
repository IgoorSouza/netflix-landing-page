import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDoorOpen,
  faTabletScreenButton,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export default function TabSelection({ selectedTab, setSelectedTab }) {
  return (
    <div className="w-full h-[120px] text-center font-arial bg-[#141414] text-[#999] md:h-[168px]">
      <div className="w-[60%] h-full flex justify-around items-center m-auto md:w-[80%] md:max-w-[600px]">
        <div
          className={
            selectedTab === 1
              ? "w-[33%] h-full flex flex-col justify-center cursor-pointer hover:text-white border-b-4 border-[#e50914]"
              : "w-[33%] h-full flex flex-col justify-center cursor-pointer hover:text-white"
          }
          onClick={() => setSelectedTab(1)}
        >
          <FontAwesomeIcon icon={faDoorOpen} className="text-[50px] mb-3" />
          <p className="hidden text-[19px] lg:block">Cancel at any time</p>
        </div>

        <div
          className={
            selectedTab === 2
              ? "w-[33%] h-full flex flex-col justify-center cursor-pointer hover:text-white border-b-4 border-[#e50914]"
              : "w-[33%] h-full flex flex-col justify-center cursor-pointer hover:text-white"
          }
          onClick={() => setSelectedTab(2)}
        >
          <FontAwesomeIcon
            icon={faTabletScreenButton}
            className="text-[50px] mb-3"
          />
          <p className="hidden text-[19px] lg:block">Watch anywhere</p>
        </div>

        <div
          className={
            selectedTab === 3
              ? "w-[33%] h-full flex flex-col justify-center cursor-pointer hover:text-white border-b-4 border-[#e50914]"
              : "w-[33%] h-full flex flex-col justify-center cursor-pointer hover:text-white"
          }
          onClick={() => setSelectedTab(3)}
        >
          <FontAwesomeIcon icon={faTags} className=" text-[50px] mb-3" />
          <p className="hidden text-[19px] lg:block">Pick your price</p>
        </div>
      </div>
    </div>
  );
}

TabSelection.propTypes = {
  selectedTab: PropTypes.number,
  setSelectedTab: PropTypes.func,
};
