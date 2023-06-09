import jwt from "jsonwebtoken";
export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};


export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  console.log("isAuth: " + authorization);

  if (authorization) {
    const token = authorization.slice(7, authorization.length);
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({ message: "Invalid token" });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    return res.status(401).send({ message: "Missing authorization header" });
  }
};

  
