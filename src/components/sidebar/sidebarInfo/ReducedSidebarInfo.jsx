import { LogicIcon } from "../../../utils/images";

export const ReducedSidebarInfo = ({ setSidebarStatus }) => {
  const openSidebar = () => {
    setSidebarStatus(false);
  };

  return (
    <div className="sidebarInfo-container">
      <div onClick={openSidebar} className="sidebarInfo-reduced">
        <img src={LogicIcon} alt="logic arrow" />
      </div>
    </div>
  );
};
