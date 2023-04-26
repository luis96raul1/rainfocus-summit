import { useState } from "react";
import { RainFocusLogo, SummitLogo, User } from "../../utils/images";

import "./sidebar.scss";
import { ReducedSidebarInfo } from "./sidebarInfo/ReducedSidebarInfo";
import { SummitInfoSidebar } from "./sidebarInfo/SummitInfoSidebar";

export const SideBar = () => {
  const [isSidebarClosed, setSidebarStatus] = useState(
    window.innerWidth <= 875
  );

  const handleSidebarInfoStatus = () => {
    setSidebarStatus((prevState) => !prevState);
  };

  return (
    <>
      <div className="side-bar">
        <div className="navigation-icons">
          <div>
            <img
              src={RainFocusLogo}
              className="rainFocus-image"
              alt="RainFocus"
              height={32}
              width={32}
            />
          </div>
          <div onClick={handleSidebarInfoStatus}>
            <img src={SummitLogo} alt="Summit" height={32} width={32} />
          </div>
        </div>
        <div className="user-icon">
          <img src={User} alt="User" height={32} width={32} />
        </div>
      </div>
      {isSidebarClosed ? (
        <ReducedSidebarInfo setSidebarStatus={setSidebarStatus} />
      ) : (
        <SummitInfoSidebar setSidebarStatus={setSidebarStatus} />
      )}
    </>
  );
};
