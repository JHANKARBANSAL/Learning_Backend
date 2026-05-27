const express=require("express")     //reqi=uire module expxress  
const app=express()
require('dotenv').config()
const port=9000

const guthubdata=
    {
  "login": "hiteshchoudhary",
  "id": 11613311,
  "node_id": "MDQ6VXNlcjExNjEzMzEx",
  "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hiteshchoudhary",
  "html_url": "https://github.com/hiteshchoudhary",
  "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
  "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
  "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
  "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
  "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
  "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Hitesh Choudhary",
  "company": null,
  "blog": "https://hitesh.ai",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
  "twitter_username": "hiteshdotcom",
  "public_repos": 123,
  "public_gists": 6,
  "followers": 57381,
  "following": 0,
  "created_at": "2015-03-23T13:03:25Z",
  "updated_at": "2026-05-11T19:22:11Z"

}

app.get('/',(req,res)=>
{
    res.send("ehllo g")
})

app.get('/youtubekabaap',(req,res)=>
{
    res.send("<h2>poori namak</h2>")
})

// app.listen(port, () =>
// {
//     console.log(`Example app listening on port ${port}`)

// })

app.get('/github',(req,res)=>{
    res.json(guthubdata)
})

app.listen(process.env.PORT, ()=>
{
    console.log(`Example app listening on port ${process.env.PORT}`)
})