// import "./App.scss";

import { SideBar } from "./components/sidebar/Sidebar";
import { Summit } from "./components/subPages/Summit";

function App() {
  return (
    <div className="main-container">
      <SideBar />
      <Summit />
    </div>
  );
}

export default App;
