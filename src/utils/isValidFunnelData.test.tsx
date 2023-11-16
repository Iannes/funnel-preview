import { isValidFunnelData } from "./isValidFunnelData";

describe("isValidFunnelData", () => {
  it("should return true for valid FunnelData", () => {
    const validFunnelData = {
      name: "Test Funnel",
      bgColor: "#FFFFFF",
      pages: [
        {
          id: "page1",
          blocks: [
            {
              id: "block1",
              type: "text",
              text: "Sample Text",
              color: "#000000",
              align: "center",
            },
          ],
        },
      ],
    };
    expect(isValidFunnelData(validFunnelData)).toBe(true);
  });

  it("should return false for non-object types", () => {
    expect(isValidFunnelData("not an object")).toBe(false);
    expect(isValidFunnelData(123)).toBe(false);
  });

  it("should return false for objects missing required fields", () => {
    const invalidFunnelData = {
      name: "Test Funnel",
      // missing bgColor and pages
    };
    expect(isValidFunnelData(invalidFunnelData)).toBe(false);
  });

  it("should return false for invalid pages array", () => {
    const invalidFunnelData = {
      name: "Test Funnel",
      bgColor: "#FFFFFF",
      pages: ["invalid-pages-array"],
    };
    expect(isValidFunnelData(invalidFunnelData)).toBe(false);
  });
});
