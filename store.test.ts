import type { MockInstance, Vitest } from "vitest";
import { getInitialCountries } from "./store";
import { vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";

const sampleUniversities = [
  { country: "United States", alpha_two_code: "US" },
  { country: "Canada", alpha_two_code: "CA" },
  { country: "Brazil", alpha_two_code: "BR" },
  { country: "Canada", alpha_two_code: "CA" }, // Duplicate entry
];

const createFetchResponse = (data: any) => ({
  json: () => Promise.resolve(data),
});

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

describe("getInitialCountries", () => {
  it("removes duplicate countries", async () => {
    // @ts-ignore
    fetchMock.mockResolvedValue(createFetchResponse(sampleUniversities));

    const countries = await getInitialCountries.value;
    expect(countries.length).toBe(3);
    expect(countries).toEqual([
      { name: "Brazil", code: "BR" },
      { name: "Canada", code: "CA" },
      { name: "United States", code: "US" },
    ]);
  });

  it("sorts countries by name", async () => {
    // @ts-ignore
    fetch.mockResolvedValue({
      json: () => Promise.resolve(sampleUniversities),
    });

    const countries = await getInitialCountries.value;
    expect(countries).toEqual([
      { name: "Brazil", code: "BR" },
      { name: "Canada", code: "CA" },
      { name: "United States", code: "US" },
    ]);
  });
});
