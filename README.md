# University Explorer

A responsive web application for displaying university data from the "Hipo University Domains List" API, featuring searchable and manageable favorites across three interactive pages.

## Installation and Running

After cloning the repo, navigate to the project directory and run the following commands to run the application locally in development mode:

```
npm ci
npm run dev
```

Now you can access the application at `http://localhost:3000`.

## Description

This project was created as a take-home interview step for Redbrick. The goal of this test was to develop a responsive web application that allows users to retrieve and display university data from the "Hipo University Domains List" API. The application should consist of two main pages:

1. **Search**: featuring a country filter dropdown, a results table with university names, states/provinces, websites, and a favorites management button
2. **Favorites**: displays a similar table that allows users to remove universities from their favorites.

Both pages should provide navigation between each other, and the favorites data should be stored locally in the browser.

## Decisions and Assumptions

A few assumptions were made during the development of this project due to the time constraints and the scope. These include:

- There should be no need for a backend server to store the favorites data, as it is a simple application that can be managed locally in the browser
- There should be no "worldwide" filter option, as performance issues arose when trying to retrieve all universities at once (alternatively, the country dropdown can have multiple selections to filter by multiple countries at once if desired by the user)
- The application should be responsive and accessible, but not necessarily optimized for mobile devices

## Features List

- Three pages:
  1. **Home**: provides a table with info from each university, as well as a search bar and country filter dropdown
  2. **Favorites**: same styling as the home page, but only displays universities you have favorited, also does not include a country filter dropdown
  3. **Explore**: This page contains a randomly generated set of 10 universities from around the world.
- Responsive favoriting (homepage) & deleting of favorites (on favs page) that automatically update the UI with the click of an icon
- Filter universities by their country (allows for multiple selections)
- Search bar to search the names within the currently filtered table

## Technologies Used

- Vue.js 3
- Nuxt.js 3
- TypeScript
- TailwindCSS
- Headless UI
- Vitest
- Git

## Testing

I chose to add tests using Vitest, not because I think these tests are extensive or really proving anything, but because I wanted to ensure that no matter how simple of an application, there should always be some sort of testing to comply with coding best practices.
To run the tests, execute:

```
npm run test
```
