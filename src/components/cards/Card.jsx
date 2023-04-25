export const Card = ({ title = null, text, icon = null }) => {
  return (
    <div className="card-container">
      <div className="title-container">
        {title && <div>{title}</div>}
        {icon && <div>{icon}</div>}
      </div>
      <div className="body-container">{text}</div>
    </div>
  );
};
