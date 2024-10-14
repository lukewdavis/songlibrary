const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const songsDir = './songs'; // Adjust path if necessary
const outputFilePath = path.join(__dirname, 'songs.json');

const songs = [];

fs.readdir(songsDir, (err, files) => {
    if (err) {
        console.error('Error reading the songs directory:', err);
        return;
    }

    files.forEach(file => {
        if (file.endsWith('.html') && file !== 'template.html') {
            const filePath = path.join(songsDir, file);
            const content = fs.readFileSync(filePath, 'utf-8');

            const $ = cheerio.load(content);
            const title = $('h1').text().trim();
            const album = $('h2').text().replace('Album:', '').trim();
            const author = $('h3').text().trim();

            songs.push({
                file: file,
                title: title,
                album: album,
                author: author
            });
        }
    });

    fs.writeFileSync(outputFilePath, JSON.stringify(songs, null, 2));
    console.log('songs.json generated successfully.');
});
