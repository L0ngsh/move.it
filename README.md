# move.it
move.it is an open-source software with the objective of improving your concentration and health with short breaks performing fast physical exercises.

# Depends
- [Node](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/cli/install)

# Install
Download this project as zip or using git clone.
```sh
git clone https://github.com/L0ngsh/move.it.git
```

Install pakages.
```sh
cd move.it/web
yarn install
```

Run project as development.
```sh
yarn dev
```

# Database
create database.
```sql
CREATE DATABASE moveit
```
Create tables .
```sql
CREATE TABLE users (
  githubId INT NOT NULL,
  githubName VARCHAR(50) NOT NULL,
  level INT DEFAULT 1,
  currentXp INT DEFAULT 0,
  totalXp INT DEFAULT 0,
  challengesCompleted INT DEFAULT 0,
);
```

# next.config.js
```js
module.exports = {
    env: {
        baseURL: 'http://localhost:3000',
        githubClientId: 'Client ID',
        githubClientSecret: 'Client Secret',
        dbHost: 'localhost',
        dbName: 'db Name',
        dbUser: 'db user',
        dbPass: 'db Password',
    }
}
```
## Get GitHub OAuth creds

