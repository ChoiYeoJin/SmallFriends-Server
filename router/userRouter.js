const router = require("express").Router();
//const authenticateToken = require("../middleware/authenticateToken");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  try {
    const key = process.env.JWT_SECRET;
    const { email, password } = req.body;

    const user = await User.findOne({
      email: email,
    });

    if (!user) {
      return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
    }

    // 비밀번호 해싱된 값과 비교
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ code: 401, message: "비밀번호가 일치하지 않습니다." });
    }

    const token = jwt.sign(
      {
        type: "JWT",
        email: email,
      },
      key,
      {
        expiresIn: "24h",
        issuer: "토큰발급자",
      }
    );

    const refreshToken = jwt.sign(
      {
        type: "JWT_REFRESH",
        email: email,
      },
      refreshKey, // 리프레쉬 토큰용 비밀키 (환경변수에서 가져옴)
      {
        expiresIn: "7d",
        issuer: "토큰발급자",
      }
    );

    return res.status(200).json({
      code: 200,
      message: "토큰이 생성되었습니다.",
      token: token,
      refreshToken: refreshToken,
      email: user.email,
      gender: user.gender,
      age: user.age,
    });
  } catch (error) {
    return res.status(419).json({
      code: 419,
      message: error,
    });
  }
});

module.exports = router;
