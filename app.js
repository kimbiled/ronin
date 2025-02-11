const http = require("http");
const fs = require("fs");
const path = require("path");

// Указываем папку с билдом
const buildPath = path.join(__dirname, "build");

const server = http.createServer((req, res) => {
    let filePath = path.join(buildPath, req.url === "/" ? "index.html" : req.url);

    // Определяем MIME-тип
    let extname = path.extname(filePath);
    let contentType = "text/html";
    switch (extname) {
        case ".js":
            contentType = "text/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".json":
            contentType = "application/json";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
            contentType = "image/jpg";
            break;
        case ".svg":
            contentType = "image/svg+xml";
            break;
        case ".ico":
            contentType = "image/x-icon";
            break;
    }

    // Читаем файл и отправляем клиенту
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === "ENOENT") {
                fs.readFile(path.join(buildPath, "index.html"), (err, content) => {
                    res.writeHead(200, { "Content-Type": "text/html" });
                    res.end(content, "utf8");
                });
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content, "utf8");
        }
    });
});

// Сервер слушает порт (cPanel автоматически определит)
server.listen(3000, () => {
    console.log("Server is running on port 3000...");
});

