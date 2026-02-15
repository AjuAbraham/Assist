import readline from "readline";
import { intentParser } from "../brain/intentParser.js";
import { taskPlanner } from "../planner/planTasks.js";
import { executeTask } from "../executor/ExecuteTask.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("Welcome Sir!!!! \n Zia at your service!!!!");
rl.on("line", async (input) => {
  try {
    if (!input || input === "") {
      throw new Error("Provide me Input to work with");
    }
    // 1. Send The input to the brain in order to parse it and understand the intent
    const tasksList = intentParser({ input });

    // 2. Send the intented tast to planner to plan the task
    const planTasks = taskPlanner({ tasksList });

    // 3. Send the planed task to executor to execute the task
    await executeTask({ targetTasks: planTasks });
  } catch (error) {
    console.error("Internal Error:", error.message);
    console.log("Sorry I am not able to function properly!!!!");
  }
});
