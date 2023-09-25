const http = require("http"); //importation du protocol http from node
const server = http.createServer((req, res) => {
  //creation d'un serveur entre client et browser
  res.statusCode = 200;
  res.setHeader("content type", "text/html"); // (image:jpeg)(application /json )// yetkatbou  9bal e write
  res.write(res);
  res.write("hello nesrine ");
  res.write(req.url); //l client chnoi tlab (/)
  if (req.url == "/home") {
    res.statusCode = 200;
    res.write("welcom home");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.write("welcome");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.write("welcome");
  } else {
    res.statusCode = 404;
    res.write("not found ");
  }

  end();
});

server.listen(5500, () => {
  console.log("litening on port 2000");
});
