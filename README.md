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
![1](https://user-images.githubusercontent.com/53846456/110531157-fe80d480-80f9-11eb-89b3-b6ee70f9e951.png)

![2](https://user-images.githubusercontent.com/53846456/110531276-22441a80-80fa-11eb-9c61-82ed71134826.png)

![3](https://user-images.githubusercontent.com/53846456/110531389-40aa1600-80fa-11eb-9ed9-32524cc29a51.png)

![4](https://user-images.githubusercontent.com/53846456/110531551-75b66880-80fa-11eb-9663-4b2e7e4147ac.png)

![5](https://user-images.githubusercontent.com/53846456/110531577-7ea73a00-80fa-11eb-823c-2059b8935c78.png)

