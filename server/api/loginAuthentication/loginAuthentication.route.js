const logger = require("menora.libs.logger");
const router = require("express").Router();
const { loginAuthenticationService } = require("./loginAuthentication.service");

router.post("/loginAuthentication", async (req, res) => {
  try {
    logger.info(
      "loginAuthentication route: menora try to fetch token data",
      req
    );

    if (!req || !req.headers || !req.headers.authorization) {
      throw new Error("loginAuthentication route: bad authorization");
    }
    validateRequestParams(req.headers.authorization);
    await loginAuthenticationService(req, res);
  } catch (err) {
    logger.error(`error in loginAuthentication route: ${err.message}`, req);
    res.status(500).json({ err: 500, data: null });
  }
});


function validateRequestParams(authorization) {
  try {
    let decrypt = Buffer.from(authorization, "base64").toString();
    let username = decrypt.split(":")[0];
    let password = decrypt.split(":")[1];
    if (!username || !password || username !== "digital" || password !== "digital") {
        throw new Error("loginAuthentication route: bad authorization headers");
    }
  } catch (e) {
    throw new Error("loginAuthentication route: bad authorization headers");
  }
}


module.exports = router;