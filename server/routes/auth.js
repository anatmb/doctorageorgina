import express from "express";

const router = express.Router();

// Datos del administrador (luego puedes moverlos a variables de entorno)
const ADMIN_USER = "admin";
const ADMIN_PASS = "1234";

// Ruta de login simple
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    // Simulamos una "sesión" devolviendo un token simple
    return res.json({ success: true, token: "admin_token_123" });
  } else {
    return res
      .status(401)
      .json({ success: false, message: "Credenciales inválidas" });
  }
});

export default router;