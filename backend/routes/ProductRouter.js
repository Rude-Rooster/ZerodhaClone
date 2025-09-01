// const ensureAuthenticated = require("../middlewares/Auth");

// const router = require("express").Router();
// const path = require("path");

// router.get("/", ensureAuthenticated, (req, res) =>{
//   res.status(200).json([
//     {
//       name:"mobile", 
//       price:10000
//     },
//     {
//       name:"tv",
//       price:20000
//     }
//   ])

//   res.sendFile(path.join(__dirname, "../../dashboard/src/index.js"));
// } );

// module.exports = router;

const ensureAuthenticated = require("../middlewares/Auth");

const router = require("express").Router();

router.get("/", ensureAuthenticated, (req, res) =>{
  res.status(200).json([
    {
      name:"mobile", 
      price:10000
    },
    {
      name:"tv",
      price:20000
    }
  ])
} );

module.exports = router;