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
    <div className="flex flex-col items-center">
      <Header />

      <div className="w-full flex flex-col items-center">
        <TabSelection
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />

        <div className="w-full flex justify-center bg-black text-white font-arial">
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
