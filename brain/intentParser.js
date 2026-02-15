const intentParser = ({ input = "" }) => {
  if (!input || input === "") return [];
  const tasksList = [];
  if (input.includes("open")) {
    const parsing = input.split(" ");
    tasksList.push({
      intent: "open_app",
      target: parsing[parsing.length - 1],
    });
  }
  return tasksList;
};

export { intentParser };
