import { exec } from "child_process";
import { appMap } from "../utils/appMap.js";

const openApp = (application) => {
  return new Promise((resolve, reject) => {
    if (!application || application === "") {
      return resolve();
    }
    const command = appMap[application];
    exec(command, (error) => {
      if (error) {
        console.error("Failed to open:", application);
        return reject(error);
      }
      console.log("Opened:", application);
      resolve();
    });
  });
};

export { openApp };
