import { useState } from "react";
import { SidebarOptions } from "../../../assets/db";
import { SideBarOption } from "../sidebarOptions/SidebarOption";

import "./sidebarInfo.scss";

export const SummitInfoSidebar = ({ setSidebarStatus }) => {
  const [selectedOption, setOption] = useState(2);

  const closeSidebar = () => {
    console.log("asdfasdf");
    setSidebarStatus(true);
  };

  return (
    <>
      <div className="sidebarInfo-container">
        <div className="sidebarInfo-header">
          <h4 onClick={closeSidebar}>RainFocus Summit</h4>
          <div className="sidebarInfo-date-place">
            <span>Lehi, UT</span>
            <span className="sidebarTextDot">·</span>
            <span>December 15th</span>
          </div>
          <div>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        {SidebarOptions.map(({ title, subOptions, id }) => (
          <SideBarOption
            key={id}
            title={title}
            options={subOptions}
            isActive={id === selectedOption}
            setOption={setOption}
            id={id}
          />
        ))}
      </div>
      <div className="sidebarInfo-closeArea" onClick={closeSidebar}></div>
    </>
  );
};
