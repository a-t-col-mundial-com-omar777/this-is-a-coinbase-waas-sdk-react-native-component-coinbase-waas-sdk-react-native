/**
 * Waits for the provided number of milliseconds.
 * @param ms The number of milliseconds.
 */
export const sleep = async function (ms: number) {
  await new Promise((r) => setTimeout(r, ms));
};
