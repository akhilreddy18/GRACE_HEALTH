const mysql = require('mysql')
const express = require('express')
const app = express()

const { host, user, port, password, database, node_port } = require('./config')

var con = mysql.createConnection({
    host,
    user,
    port,
    password,
    database
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("connected to mysql server")
  });

app.get('/', (req, res) => {
    con.query("SELECT * FROM results WHERE FTR IN('H', 'A') LIMIT 3", function (err, result) {
      if (err) throw err;
      res.send(result)
    });
})

app.get('/:league/:season_pair', (req, res) => {
    league = req.params.league
    season_pair = req.params.season_pair
    con.query("SELECT * FROM results WHERE `Div` = '" + league + "' AND Season = '" + season_pair +"' LIMIT 3", function (err, result) {
      if (err) throw err;
      res.send(result)
    });
})

app.listen(node_port, () => {
  console.log(`App listening at http://localhost:${node_port}`)
})

