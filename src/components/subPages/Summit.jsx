import { PersonPortal, SummitIcon } from "../../utils/images";
import { Step } from "../Step";
import { Card } from "../cards/Card";
import { db } from "../../assets/db";

export const Summit = () => {
  return (
    <div>
      <div className="header-container">
        <div className="main-header">
          <div className="left-side">
            <div className="image">
              <img src={SummitIcon} alt="Summit Icon" />
            </div>
            <div className="title">
              <p>RainFocus Summit</p>
              <p>December 15th</p>
              <p>Lei, Utah</p>
            </div>
          </div>
          <div className="right-side">
            <button>Edit event</button>
          </div>
        </div>
        <div className="sub-header">
          <p>Event setup guide</p>
          <p>
            See the availabe list of modules below. We suggest that you start
            with the attendee module.
          </p>
        </div>
      </div>
      <div className="main-container">
        <div className="title">
          <img src={PersonPortal} alt="person portal" />
          <p>Attendee</p>
        </div>
        <Step stepNumber={1} stepTitle={"Base Settings."}>
          <div className="step1-container">
            {db.step1.map((title, text) => (
              <Card title={title} text={text} />
            ))}
          </div>
        </Step>
      </div>
    </div>
  );
};
