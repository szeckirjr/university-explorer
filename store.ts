import { reactive } from "vue";
import type { Country, University } from "./helpers/types";
import { precomputedCountries } from "./helpers/country";
import { computed } from "vue";

export const getInitialCountries = computed(async () => {
  const baseUrl = "http://universities.hipolabs.com/search";
  const response = await fetch(baseUrl);
  const data = (await response.json()) as University[];
  const countries: Country[] = data.map((item) => ({
    name: item.country,
    code: item.alpha_two_code,
  }));

  // Remove duplicates
  const unique = countries.filter(
    (item, index, self) =>
      index ===
      self.findIndex((t) => t.code === item.code && t.name === item.name)
  );

  // Order by name
  return unique.sort((a, b) => a.name.localeCompare(b.name));
});

const getInitialFavorites = computed(() => {
  if (typeof localStorage === "undefined") {
    return [];
  }
  const favorites = localStorage.getItem("ue/favorites");
  return favorites ? (JSON.parse(favorites) as University[]) : [];
});

export const store = reactive({
  selectedCountries: ["CA", "BR"],
  favorites: getInitialFavorites.value,
  countries: precomputedCountries,
});

export const fetchCountries = async () => {
  store.countries = await getInitialCountries.value;
};

export const toggleFavorite = (item: University) => {
  const index = store.favorites.findIndex((i) => i.name === item.name);
  if (index === -1) {
    store.favorites.push(item);
  } else {
    store.favorites.splice(index, 1);
  }

  // Save to localStorage
  localStorage.setItem("ue/favorites", JSON.stringify(store.favorites));
};
