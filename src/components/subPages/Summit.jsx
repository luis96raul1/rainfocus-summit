import { PersonPortal, SummitIcon } from "../../utils/images";
import { Step } from "../Step";
import { Card } from "../cards/Card";
import { CardsInfo } from "../../assets/db";
import "./summit.scss";

export const Summit = () => {
  return (
    <div className="summit-body">
      <div className="header-container">
        <div className="main-header">
          <div className="left-side">
            <div className="image">
              <img src={SummitIcon} alt="Summit Icon" />
            </div>
            <div className="title-container">
              <h4>RainFocus Summit</h4>
              <p>December 15th</p>
              <p>Lehi, Utah</p>
            </div>
          </div>
          <div className="right-side">
            <button>Edit event</button>
          </div>
        </div>
        <div className="sub-header">
          <h4>Event setup guide</h4>
          <p>
            See the availabe list of modules below. We suggest that you start
            with the attendee module.
          </p>
        </div>
      </div>
      <div className="main-container">
        <div className="title">
          <img src={PersonPortal} alt="person portal" height={"35px"} />
          <p>Attendee</p>
        </div>
        <Step
          stepNumber={1}
          stepTitle={"Base Settings."}
          childrenClass={"step1-container"}
        >
          {CardsInfo.step1.map(({ title, text }) => (
            <Card stepNumber={1} title={title} text={text} />
          ))}
        </Step>
        <Step
          stepNumber={2}
          stepTitle={"Build registration workflows."}
          childrenClass={"step2-container"}
        >
          {CardsInfo.step2.map(({ title, icon, text }) => (
            <Card stepNumber={2} title={title} text={text} icon={icon} />
          ))}
        </Step>
        <Step
          stepNumber={3}
          stepTitle={"Step 3: Design post-registration experiences."}
          childrenClass={"step3-container"}
        >
          {CardsInfo.step3.map(({ title, icon, text }) => (
            <Card stepNumber={3} title={title} text={text} icon={icon} />
          ))}
        </Step>
      </div>
    </div>
  );
};
