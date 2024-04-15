import WebsiteList from "./WebsiteList.vue";

import { render, screen } from "@testing-library/vue";

test("renders a list of websites", async () => {
  render(WebsiteList, {
    props: {
      websites: ["https://vuejs.org", "https://vitejs.dev"],
    },
  });

  const vue = await screen.findByText("🔗 Primary");
  const vite = await screen.findByText("🔗 Alt 1");

  expect(vue).to.exist;
  expect(vite).to.exist;
});

test("renders nothing when no websites are provided", async () => {
  render(WebsiteList, {
    props: {
      websites: [],
    },
  });

  const noWebsites = screen.queryByText("🔗 Primary");

  expect(noWebsites).to.not.exist;
});
