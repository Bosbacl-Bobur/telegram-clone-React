import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    // Header ichidan token olish
    const token = req.header("Authorization")?.split(" ")[1]; // "Bearer <token>"

    if (!token) {
      return res.status(401).json({ message: "No token, authorization denied" });
    }

    // Tokenni tekshirish
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // foydalanuvchini req ichiga saqlaymiz

    next(); // keyingi functionga o'tkazish
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};
