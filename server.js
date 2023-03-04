const http = require("http");
// const fs = require("fs");
const port = 3003;

// Chargement des clés privées et du certificat SSL
const options = {
  key: fs.readFileSync("./chemin_vers_l_clé_privée"),
  cert: fs.readFileSync("chemin_vers_le_certificat_ssl"),
};

// Création du serveur HTTPS
http
  .createServer(options, function (req, res) {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("Hello world");
    res.end();
  })
  .listen(port);
console.log(`Serveur Node.js sécurisé est à l'écoute sur le port ${port}`);
