import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDoorOpen,
  faTabletScreenButton,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export default function TabSelection({ selectedTab, setSelectedTab }) {
  return (
    <div className="tabs">
      <div>
        <div
          className={selectedTab === 1 ? "tab selected" : "tab"}
          onClick={() => setSelectedTab(1)}
        >
          <FontAwesomeIcon icon={faDoorOpen} />
          <p className="toggleTabsText">Cancel at any time</p>
        </div>

        <div
          className={selectedTab === 2 ? "tab selected" : "tab"}
          onClick={() => setSelectedTab(2)}
        >
          <FontAwesomeIcon icon={faTabletScreenButton} />
          <p className="toggleTabsText">Watch anywhere</p>
        </div>

        <div
          className={selectedTab === 3 ? "tab selected" : "tab"}
          onClick={() => setSelectedTab(3)}
        >
          <FontAwesomeIcon icon={faTags} />
          <p className="toggleTabsText">Pick your price</p>
        </div>
      </div>
    </div>
  );
}

TabSelection.propTypes = {
  selectedTab: PropTypes.number,
  setSelectedTab: PropTypes.func,
};
