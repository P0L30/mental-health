import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization || req.body.token || req.query.token;

    if (!token) {
        return res.status(403).json({ success: false, message: "Token is required" });
    }

    try {
        const secretKey = process.env.JWT_SECRET || "fallbackSecretKey";
        const decoded = await jwt.verify(token, secretKey);
        req.user = decoded;
        return next();
    } catch (err) {
        return res.status(401).json({ success: false, message: "Failed to authenticate token" });
    }
};