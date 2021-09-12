export const runTimeout = (time = 3000) =>
  new Promise((resolve) => setTimeout(() => resolve(), time));
