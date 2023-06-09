import "./app.scss";

import { SideBar } from "./components/sidebar/Sidebar";
import { Summit } from "./components/subPages/Summit";

function App() {
  return (
    <div className="app-main-container">
      <SideBar />
      <Summit />
    </div>
  );
}

export default App;
