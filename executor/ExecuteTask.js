import { openApp } from "../modules/openApp.js";

const executeTask = async ({ targetTasks = [] }) => {
  if (targetTasks.length === 0) return;
  const executedTasks = targetTasks.map(async (task) => {
    switch (task.type) {
      case "open_app":
        await openApp(task.target);
        return;
      default:
        console.log("Unknown task type:", task.type);
    }
  });
  await Promise.all(executedTasks);
};

export { executeTask };
