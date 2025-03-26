const ensureAuthenticated = require("../Middlewares/Auth");

const router = require("express").Router();

router.get("/", ensureAuthenticated, (req, res) => {
  console.log("-----Logged User Details-----", req.user);
  res.status(200).json([
    {
      name: "Tea",
      price: "1500",
    },
    {
      name: "Spices",
      price: "2000",
    },
  ]);
});

module.exports = router;
