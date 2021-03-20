var express = require('express');
var router = express.Router();
const path = require("path");
const argon2 = require("argon2");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(path.join(__dirname, "..", "frontend", "build", "index.html"));
});

function makeid(length) {
  var result           = '';
  var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

router.get("/isloggedin", function (req, res) {
  res.send(req.session.loggedIn || false);
})

router.post("/login", async function (req, res) {
  if (await argon2.verify(process.env.ARGON2_LOGIN_PASSWORD_HASH, req.body.password)) {
    req.session.loggedIn = true;
    res.redirect("/");
  } else {
    res.send("Sorry, this password is incorrect!");
  }
})

router.post('/upload', function(req, res) {
  if (!req.session.loggedIn) {
    res.status(401);
    return res.send("Please Sign In!");
  }

  try {
    if(!req.files) {
      res.send({
        status: false,
        message: 'No file uploaded'
      });
    } else {
      //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
      let avatar = req.files["files[]"];
      let name = avatar.name;

      //Use the mv() method to place the file in upload directory (i.e. "uploads")
      name = makeid(32) + path.extname(name)
      avatar.mv('./uploads/' + name);

      //send response
      res.send({
        status: true,
        message: 'File is uploaded',
        data: {
          name: name,
          mimetype: avatar.mimetype,
          size: avatar.size
        }
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
})

module.exports = router;
