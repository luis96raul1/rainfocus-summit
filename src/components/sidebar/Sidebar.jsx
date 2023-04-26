import { RainFocusLogo, SummitLogo, User } from "../../utils/images";

import "./sidebar.scss";
import { SummitInfoSidebar } from "./sidebarInfo/SummitInfoSidebar";

export const SideBar = () => {
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
          <div>
            <img src={SummitLogo} alt="Summit" height={32} width={32} />
          </div>
        </div>
        <div className="user-icon">
          <img src={User} alt="User" height={32} width={32} />
        </div>
      </div>
      <SummitInfoSidebar />
    </>
  );
};
