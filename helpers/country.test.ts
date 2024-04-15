import { getFlagEmoji } from "./country";

test("getFlagEmoji properly returns flags", () => {
  expect(getFlagEmoji("CA")).toBe("🇨🇦");
  expect(getFlagEmoji("BR")).toBe("🇧🇷");
  expect(getFlagEmoji("US")).toBe("🇺🇸");
});

test("getFlagEmoji returns empty flag for empty country code", () => {
  expect(getFlagEmoji("")).toBe("🏳️");
});
