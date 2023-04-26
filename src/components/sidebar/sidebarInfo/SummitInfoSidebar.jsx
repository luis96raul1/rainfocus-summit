import { useState } from "react";
import { SidebarOptions } from "../../../assets/db";
import { SideBarOption } from "../sidebarOptions/SidebarOption";

import "./sidebarInfo.scss";

export const SummitInfoSidebar = () => {
  const [selectedOption, setOption] = useState(2);

  return (
    <div className="sidebarInfo-container">
      <div className="sidebarInfo-header">
        <h4>RainFocus Summit</h4>
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
          title={title}
          options={subOptions}
          isActive={id === selectedOption}
          setOption={setOption}
          id={id}
        />
      ))}
    </div>
  );
};
