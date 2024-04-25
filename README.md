# Assignment Angular App

## Features

1. **Search Functionality**: Users can search for Github users by entering their username in the search bar and clicking the search button.

2. **Repository Display**: Upon searching for a user, the application displays the repositories associated with the searched user. Each repository can have multiple topics associated with it.

3. **Server-side Pagination**: Pagination of repositories is handled server-side to improve performance. Users can select the number of repositories to display per page through a dropdown menu, with options ranging from 10 to 100 repositories per page.

4. **Zero State Handling**: If a user is not found or if the searched user does not have any repositories, the application displays an empty state while keeping the search bar visible for further searches.

5. **Skeleton Loaders**: During API calls, skeleton loaders are displayed to indicate that content is being loaded.

6. **Unit Testing**: The project includes unit tests for at least one component and one service, achieving 100% code coverage. Detailed documentation on running these tests is provided in the README.

7. **Cloud Hosting**: The single-page application (SPA) is hosted on a cloud service of your choice, such as Heroku, Netlify, or GitHub Pages.

8. **API Call Caching**: GET API calls to external APIs, such as the Github API, are cached to avoid duplicate calls even if the user navigates between pages or reloads the page.

## How to Run

To run the application locally, follow these steps:

1. Clone the repository from [GitHub](https://github.com/shuklaritvik06/angular_app).

   ```bash
   git clone https://github.com/shuklaritvik06/angular_app.git
   ```

2. Navigate into the project directory.

   ```bash
   cd angular_app
   ```

3. Install dependencies using npm.

   ```bash
   npm install
   ```

4. Start the Angular development server.

   ```bash
   ng serve
   ```

5. Open your web browser and visit `http://localhost:4200` to view the application.

## Unit Testing

The project includes unit tests for one component and one service. To run the tests, use the following command:

```bash
ng test
```

This command will run the unit tests and provide code coverage details. Detailed instructions for running tests and interpreting the coverage results can be found in the README file of the project repository.

## Cloud Hosting

The application is hosted on a cloud service to make it accessible online. You can visit the deployed application at [https://www.hello.com](https://www.hello.com).
