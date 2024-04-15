export const getFlagEmoji = (countryCode: string) => {
  if (countryCode === "world") return "🌎";
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
};
