const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Раздаём статические файлы из папки build
app.use(express.static(path.join(__dirname, "build")));

// Для SPA (React Router) — перенаправляем все запросы на index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Сервер запущен на http://localhost:${PORT}`);
});
