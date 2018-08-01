var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var pug = require("pug");

var indexRouter = require("./routes/index");

// var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// // app.use("/users", usersRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

//INDEX
app.get("/posts", function(req, res) {
  res.render("index", { title: "RMIT", message: "Welcome to RMIT" });
});
//NEW
app.get("/posts/new", function(req, res) {
  //make form
  //
});
//CREATE
app.post("posts", function(req, res) {
  //create post
  //add to DB
  //go to index
});
//SHOW
app.get("posts/:id", function(req, res) {
  //configure show page
  //render show page
});
//EDIT
app.get("posts/:id", function(req, res) {
  //show edit form
  //redirect to show page
});

//UPDATE
app.put("posts/:id", function(req, res) {
  //update post in db
  //redirect to show page
});
//DESTROY
app.delete("posts/:id", function(req, res) {});

module.exports = app;
