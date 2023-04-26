import { ActiveDot, Dot } from "../../../utils/images";

import "./sidebarOptions.scss";

export const SideBarOption = ({
  isActive = false,
  title,
  options,
  id,
  setOption,
}) => {
  const selectOption = () => {
    setOption(id);
  };

  const getActiveClass = () => {
    return isActive ? "active" : "null";
  };

  return (
    <div className="sidebarOption-container" onClick={selectOption}>
      <div className={`main-option ${getActiveClass()}`}>
        <img
          src={isActive ? ActiveDot : Dot}
          alt="dot"
          height={24}
          width={24}
        />
        <p className={getActiveClass()}>{title}</p>
      </div>
      {isActive && (
        <div className="subOptions-container">
          {options?.map((title, id) => (
            <p key={id} className="subOption">
              {title}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
