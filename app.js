import express from "express";
import path from "node:path";
import data from "./our-modules/data.js";
import renderAlbumPage from "./our-modules/renderAlbumPage.js";


const app = express();

app.listen(3000, () => console.log("Server ready!"));

app.get("/pages/:fileName", (req, res) => {
  const { fileName } = req.params;
  res.sendFile(path.join("/", "public", fileName), { root: import.meta.dirname,});
});

app.get(["/", "/pages"], (req, res) => {
  res.redirect("/pages/index.html");
});

app.get("/api/music/:idOfABand", (req, res) => {
  const bandId = req.params['idOfABand'];
  const band = data.find(b => b.id === bandId);
  res.json(band);
});

app.get("/music-pages/:bandId/:albumId", (req, res) => {
  const { bandId, albumId } = req.params;
  const html = renderAlbumPage(bandId, albumId);
  res.send(html);
});