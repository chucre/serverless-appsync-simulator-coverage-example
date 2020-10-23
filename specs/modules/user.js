const { v4: uuid} = require("uuid");
const jwt = require("jsonwebtoken");

const generateJwt = async(claims) => {
  return new Promise((resolve, reject) => {
    jwt.sign(claims, "some private key", function(err, token) {
      if (err) {
        reject(err);
      }
      resolve(token);
    });
  });
};

async function handle(extraClaims) {
  const userId = uuid();
  this.test.userId = userId;

  const claims = {
    "sub": userId,
    "cognito:groups": [],
    "email_verified": true,
    "algorithm": "HS256",
    "iss": "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_fake_idp",
    "phone_number_verified": true,
    "cognito:username": "user1",
    "cognito:roles": [],
    "aud": "2hifa096b3a24mvm3phskuaqi3",
    "event_id": "18f4067e-9985-4eae-9f33-f45f495470d0",
    "token_use": "id",
    "phone_number": "+12062062016",
    "exp": 1602676576,
    "email": "user@domain.com",
    "auth_time": 1602633376,
    "iat": 1602633376,
    ...(extraClaims||{})
  };
  const token = await generateJwt(claims);
  this.test.headers = {
    Authorization: token
  };
};


module.exports = {
  handle
};