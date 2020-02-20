const express = require("express");
const app = express(); 
const port = 3000;

const mailList= {
    "name":  "staff",
    "members": [ "talea@techtonica.org", "michelle@techtonica.org" ]
  }

// const mailList = '';

  app.route("/lists").get((require, res) => {
    if(mailList.length === 0 ) {
     res.status(200).send("[]")
    } else { res.status(200).send(mailList.name)}
});

app.get("/lists/:name", function(reg, res) {
    res.status(200).send(mailList[name])
});

app.delete()

app.put()

app.

app.listen(port, function(){
    console.log(`app listening on port ${port}`)
})

