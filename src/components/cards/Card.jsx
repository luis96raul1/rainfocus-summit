import "./card.scss";

export const Card = ({ stepNumber, title = null, text, icon = null }) => {
  return (
    <div
      className={`card-container step${stepNumber} ${title ? "" : "center"}`}
    >
      <div className="title-container">
        {icon && <img src={icon} alt="card icon" />}
        {title && <p className="card-title">{title}</p>}
      </div>
      <div className="body-container">
        <p className="card-body">{text}</p>
      </div>
    </div>
  );
};
