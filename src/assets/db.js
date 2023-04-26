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
      icon: { src: LogicIcon, height: "17", with: "15" },
      title: "Attendee Registration",
      text: "Start by creating a general registration workflow",
    },
    {
      icon: { src: LogicIcon, height: "17", with: "15" },
      title: "Attendee Registration",
      text: "Start by creating a general registration workflow",
    },
    {
      icon: { src: LogicIcon, height: "17", with: "15" },
      title: "Attendee Registration",
      text: "Start by creating a general registration workflow",
    },
    {
      icon: { src: AddCircle, height: "20", with: "20" },
      text: "Add Registration Workflow",
    },
  ],
  step3: [
    {
      icon: { src: Computer, height: "16px", with: "24px" },
      title: "Attendee Portal",
      text: "Manage the portal that attendees will see after they’ve register for your event.",
    },
  ],
};

export const SidebarOptions = [
  { id: 1, title: "Guide", subOptions: ["Dummy option", "Dummy option"] },
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
  {
    id: 3,
    title: "Content",
    subOptions: ["Dummy option", "Dummy option", "Dummy option"],
  },
  {
    id: 4,
    title: "Exhibitors",
    subOptions: [
      "Dummy option",
      "Dummy option",
      "Dummy option",
      "Dummy option",
    ],
  },
];
