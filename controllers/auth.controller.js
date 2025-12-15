export const login = (req, res) => {
  const { user, password } = req.body;

  if (user === 'admin' && password === '1234') {
    return res.json({
      message: 'Login exitoso'
    });
  }

  res.status(401).json({ message: 'Credenciales inválidas' });
};
