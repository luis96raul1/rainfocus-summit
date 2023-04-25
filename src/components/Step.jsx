export const Step = ({ stepNumber, stepTitle, children }) => {
  return (
    <div>
      <div>
        <span>{`Step ${stepNumber}: `}</span>
        <span>{stepTitle}</span>
      </div>
      {children}
    </div>
  );
};
