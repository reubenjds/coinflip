import express from 'express';
import Database from 'better-sqlite3';
import cors from 'cors';



const app = express()

const names = []

const db = new Database('coinflip.db')

app.use(cors({ origin: true }));
app.use(express.json())
app.listen(4040)

app.get("/leaderboard", function(request, res){ 

    res.json(names)
})

app.post("/streak", function(request, res){
    names.push(request.body);
		console.log(names);
    res.json({status: "Success"});
});