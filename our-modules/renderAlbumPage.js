import data from "./data.js";

const renderAlbumPage = (bandId, albumId) => {
  const band = data.find(b => b.id === bandId);
  const album = band.topAlbums.find(a => a.id === albumId);
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>${album.name}</title>
        <link rel="stylesheet" href="/pages/style.css">
    </head>
    <body>
        <h1>${album.name}</h1>
        <p>Artist: ${band.name}</p>
        <p>Released in: ${album.year}</p>
    </body>
    </html>
  `;
};

export default renderAlbumPage;