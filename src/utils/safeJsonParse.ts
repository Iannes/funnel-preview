export const safeJsonParse = <T>(string: string): T | undefined => {
  try {
    return JSON.parse(string);
  } catch (error) {
    // noop
    console.log(error);
  }
};
