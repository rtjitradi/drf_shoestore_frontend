In your frontend repo, be sure to include the GitHub URL to your backend in the README. Then submit a link to the frontend repo.

***********https://github.com/KenzieAcademy/django-rest-rtjitradi***********


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


Now that you've created an API with Django Rest Framework (DRF), let's put that API to use!

 

You all remember React (Links to an external site.)Links to an external site.. right? Well. it's just the tool we need for accessing the data from our API. In this assessment, we'll create a Single Page Application (SPA) that fetches data from our backend API and displays it on our React frontend.

Your Task
For this assessment, we will be creating a new React frontend and reusing our backend from Django ReST Framework: APIs in a Nutshell 

Frontend

Create a new react app. You'll want to use something like Facebook's Create React App (Links to an external site.)Links to an external site.. Please check the documentation, because this project's documentation is frequently updated. You can use either npm or yarn as your package manager, whichever you prefer to use is fine.

This react app will be relatively simple. We don't need to worry about using Redux, and we just need to create one component to handle everything we need.

Requirements

Uses fetch (Links to an external site.)Links to an external site. to get data from your Django Rest Framework API → https://reactjs.org/docs/faq-ajax.html (Links to an external site.)Links to an external site.
Displays all instances of Shoe on a single page
Each attribute of a given Shoe is displayed:
size
brand name
manufacturer
color
material
shoe_type
fasten_type
 

Backend

Our backend API is already functional, but we do need to make some changes before it will talk to our frontend. The frontend will be displaying shoes, so be sure to add at least 5 new instances of shoe to your backend. In addition, we'll need to worry about CORS (Links to an external site.)Links to an external site.. DRF has a documentation page (Links to an external site.)Links to an external site. on how to handle CORS via a python package called django-cors-headers (Links to an external site.)Links to an external site.. Use this package to allow your frontend to fetch data.

Note: For this assessment, be sure to include your db.sqlite3 in your submission. We want to see those shoes 👟

Requirements

Backend is setup with django-cors-headers (Links to an external site.)Links to an external site.
Create at least 5 instances of Shoe via the DRF "admin panel".
Submission
You should already have a repo for your backend. Be sure to create a new repo for the frontend.

In your frontend repo, be sure to include the GitHub URL to your backend in the README. Then submit a link to the frontend repo.

***********https://github.com/KenzieAcademy/django-rest-rtjitradi***********

https://github.com/<github_username>/drf_shoestore_frontend
Rubric
React + APIs = <3
React + APIs = <3
Criteria	Ratings	Pts
This criterion is linked to a Learning OutcomeUses fetch to get data from your Django Rest Framework API
3.0 pts
Full Marks
0.0 pts
No Marks
3.0 pts
This criterion is linked to a Learning OutcomeDisplays all instances of Shoe on a single page
3.0 pts
Full Marks
0.0 pts
No Marks
3.0 pts
This criterion is linked to a Learning OutcomeEach attribute of a given Shoe is displayed
view longer description
3.5 pts
Full Marks
0.0 pts
No Marks
3.5 pts
This criterion is linked to a Learning OutcomeBackend is setup with django-cors-headers
3.0 pts
Full Marks
0.0 pts
No Marks
3.0 pts
This criterion is linked to a Learning OutcomeCreate at least 5 instances of Shoe via the DRF "admin panel".
2.5 pts
Full Marks
0.0 pts
No Marks
2.5 pts
Total Points: 15.0


In your frontend repo, be sure to include the GitHub URL to your backend in the README. Then submit a link to the frontend repo.

***********https://github.com/KenzieAcademy/django-rest-rtjitradi***********
