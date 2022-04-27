const express = require("express");
const res = require("express/lib/response");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended:true}));
app.use(express.json());

app.get("/api/config", (req, res) => { res.json({success: true,
});
});

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}
app.use(express.static("client/build"));

app.use(routes);

// app.get(*), (req, res) => {res.sendFile(path.join(__dirname, "./client/build/index.html"))};

//connect to MongoDB (set up later)

app.listen(PORT,function() {
    console.log(`Express server is running on http://localhost:${PORT}!`);
});
