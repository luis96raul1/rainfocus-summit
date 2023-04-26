import { AddCircle, Computer, LogicIcon } from "../utils/images";

export const CardsInfo = {
  step1: [
    {
      title: "General",
      text: "Define Attendee types & attributes",
    },
    {
      title: "Title",
      text: "Description that explains the value goes here. Description that explains the value goes here. ",
    },
    {
      title: "Title",
      text: "Description that explains the value goes here. Description that explains the value goes here. ",
    },
  ],
  step2: [
    {
      icon: LogicIcon,
      title: "Attendee Registration",
      text: "Start by creating a general registration workflow",
    },
    {
      icon: LogicIcon,
      title: "Attendee Registration",
      text: "Start by creating a general registration workflow",
    },
    {
      icon: LogicIcon,
      title: "Attendee Registration",
      text: "Start by creating a general registration workflow",
    },
    {
      icon: AddCircle,
      text: "Add Registration Workflow",
    },
  ],
  step3: [
    {
      icon: Computer,
      title: "Attendee Portal",
      text: "Manage the portal that attendees will see after they’ve register for your event.",
    },
  ],
};

export const SidebarOptions = [
  { id: 1, title: "Guide" },
  {
    id: 2,
    title: "Attendees",
    subOptions: [
      "Attendees",
      "Attendee types",
      "Packages",
      "Reg codes",
      "Discounts",
    ],
  },
  { id: 3, title: "Content" },
  { id: 4, title: "Exhibitors" },
];
