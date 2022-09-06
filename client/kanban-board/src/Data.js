import { v4 as uuidv4 } from "uuid";

const Data = [
  {
    id: uuidv4(),
    title: "To Do",
    tasks: [
      {
        id: uuidv4(),
        title: "Task 01",
      },
      {
        id: uuidv4(),
        title: "Task 06",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "In Progress",
    tasks: [
      {
        id: uuidv4(),
        title: "Task 04",
      },
      {
        id: uuidv4(),
        title: "Task 03",
      },
      {
        id: uuidv4(),
        title: "Task 05",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Done",
    tasks: [
      {
        id: uuidv4(),
        title: "Task 02",
      },
    ],
  },
];

export default Data;
