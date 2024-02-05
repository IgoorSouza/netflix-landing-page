import { useState } from "react";
import Header from "./components/Header";
import TabSelection from "./components/TabSelection";
import TabOne from "./components/TabOne";
import TabTwo from "./components/TabTwo";
import TabThree from "./components/TabThree";
import Footer from "./components/Footer";

function App() {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div className="container">
      <Header />

      <div className="info">
        <TabSelection
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />

        <div className="tab-content">
          {selectedTab === 1 && <TabOne />}

          {selectedTab === 2 && <TabTwo />}

          {selectedTab === 3 && <TabThree />}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
