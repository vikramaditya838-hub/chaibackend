require('dotenv').config()
const express = require('express');

const app = express();

const port = 3000;

githubData = {
    
  "login": "vikramaditya838-hub",
  "id": 238177489,
  "node_id": "U_kgDODjJM0Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/238177489?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/vikramaditya838-hub",
  "html_url": "https://github.com/vikramaditya838-hub",
  "followers_url": "https://api.github.com/users/vikramaditya838-hub/followers",
  "following_url": "https://api.github.com/users/vikramaditya838-hub/following{/other_user}",
  "gists_url": "https://api.github.com/users/vikramaditya838-hub/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/vikramaditya838-hub/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/vikramaditya838-hub/subscriptions",
  "organizations_url": "https://api.github.com/users/vikramaditya838-hub/orgs",
  "repos_url": "https://api.github.com/users/vikramaditya838-hub/repos",
  "events_url": "https://api.github.com/users/vikramaditya838-hub/events{/privacy}",
  "received_events_url": "https://api.github.com/users/vikramaditya838-hub/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 1,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-10-15T08:15:12Z",
  "updated_at": "2026-09-26T18:00:08Z"

}


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/instagram',(req,res) => {
    res.send('ravipatel06_')
})
app.get('/login',(req,res) => {
    res.send('<h1>please login at chai or code</h1>')
})

app.get('/youtude',(req,res) => {
    res.send("<h2> chai our code </h2>")
}) 

app.get('/github',(req,res) =>{
    res.json(githubData)
})

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});
