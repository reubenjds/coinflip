import express from 'express';
import Database from 'better-sqlite3';
import cors from 'cors';



const app = express()

const db = new Database('coinflip.db')

app.use(cors({ origin: true }));
app.use(express.json())
app.listen(4040)

app.get("/leaderboard", function(request, res){ 

    res.json([{user:"bob", streak : 2}, {user:"john", streak : 2},{user:"harry", streak : 2}, {user:"greg", streak : 2}])
})

app.post("/test", function(request, res){
    console.log(request.body)
})