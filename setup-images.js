const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'img');
const publicDir = path.join(__dirname, 'public');
const publicImgDir = path.join(publicDir, 'img');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
if (fs.existsSync(imgDir) && !fs.existsSync(publicImgDir)) {
  fs.renameSync(imgDir, publicImgDir);
}

if (fs.existsSync(publicImgDir)) {
  const files = fs.readdirSync(publicImgDir);
  files.forEach(file => {
    if (file.includes('11.42.17 PM (1)')) fs.renameSync(path.join(publicImgDir, file), path.join(publicImgDir, 'img1.jpeg'));
    else if (file.includes('11.42.17 PM (2)')) fs.renameSync(path.join(publicImgDir, file), path.join(publicImgDir, 'img2.jpeg'));
    else if (file.includes('11.42.17 PM.jpeg')) fs.renameSync(path.join(publicImgDir, file), path.join(publicImgDir, 'img3.jpeg'));
    else if (file.includes('11.42.18 PM (1)')) fs.renameSync(path.join(publicImgDir, file), path.join(publicImgDir, 'img4.jpeg'));
    else if (file.includes('11.42.18 PM (3)')) fs.renameSync(path.join(publicImgDir, file), path.join(publicImgDir, 'img5.jpeg'));
    else if (file.includes('logo-EL_TREN')) fs.renameSync(path.join(publicImgDir, file), path.join(publicImgDir, 'logo.png'));
  });
}
