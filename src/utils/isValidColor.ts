export const isValidColor = (color: string): boolean => {
  if (typeof window === "undefined") return false;
  const s = new Option().style;
  s.color = color;
  return s.color !== "";
};
