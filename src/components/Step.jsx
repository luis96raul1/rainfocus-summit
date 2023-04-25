import "./step.scss";

export const Step = ({ stepNumber, stepTitle, children, childrenClass }) => {
  return (
    <div className="step-container">
      <div className="step-title-container">
        <span className="step-title">{`Step ${stepNumber}: `}</span>
        <span>{stepTitle}</span>
      </div>
      <div className={childrenClass}>{children}</div>
    </div>
  );
};
