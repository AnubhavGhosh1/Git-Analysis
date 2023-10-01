![Git-Analysis](https://socialify.git.ci/AnubhavGhosh1/Git-Analysis/image?description=1&font=Inter&forks=1&issues=1&language=1&name=1&owner=1&pattern=Plus&pulls=1&stargazers=1&theme=Dark)

## About
In This Project, You can get the analysis of Any GitHub User. In this, i used React, GitHub API ( for data fetch) and Netlify ( for deployment )

## Live Demo: [[https://github-user-analytics.netlify.app/](https://anubhav-11-git-analysis.netlify.app/)](https://anubhav-11-git-analysis.netlify.app/)

## React Icons

[React Icons - Main Docs](https://react-icons.github.io/react-icons/)

```jsx
import { FiUsers, FiUserPlus } from 'react-icons/fi';
<FiUsers className='nameOfTheClass'> </FiUsers>;
```

## React Router Dom

version used - "react-router-dom": "^5.2.0",

- [react-router-dom - Main Docs](https://reactrouter.com/web/guides/quick-start)

- <Switch> renders the first child <Route> that matches
- A <Route path="*"> always matches

## Github API

- [Root Endpoint](https://api.github.com)
- [Get User](https://api.github.com/users/AnubhavGhosh1)
- [Repos](https://api.github.com/users/AnubhavGhosh1/repos?per_page=100)
- [Followers](https://api.github.com/users/AnubhavGhosh1/followers)
- [Rate Limit](https://api.github.com/rate_limit)

  For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.

## For Deployment
- Run this command in the main project to create build version of the project
```
npm run build
```
