import express from 'express';
import Database from 'better-sqlite3';



const app = express()

const db = new Database('coinflip.db')


app.listen(4040)

app.get("/leaderboard", function(request, res){ 

    res.json([{user:"bob", streak : 2}, {user:"john", streak : 2},{user:"harry", streak : 2}, {user:"greg", streak : 2}])
})

app.post("/leaderboard", function(request, res){

})