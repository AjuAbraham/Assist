const taskPlanner = ({ tasksList = [] }) => {
  if (tasksList.length === 0) return [];
  const plannedTasks = tasksList.map((task) => {
    switch (task.intent) {
      case "open_app":
        return { type: "open_app", target: task.target };
      default:
        console.log(
          "You have provide me a unkown task Sir beyond my comprehension",
        );
        return null;
    }
  });
  return plannedTasks.filter((task) => task !== null);
};

export { taskPlanner };
