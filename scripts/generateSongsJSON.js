const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Directory containing song files
const songsDir = './songs'; // Adjust path if necessary
const outputFilePath = path.join(__dirname, '../songs/', 'songs.json');

// Array to hold song details
const songs = [];

// Read the songs directory
fs.readdir(songsDir, (err, files) => {
    if (err) {
        console.error('Error reading the songs directory:', err);
        return;
    }

    // Process each file in the directory
    files.forEach(file => {
        // Check for HTML files and exclude template.html
        if (file.endsWith('.html') && file !== 'template.html') {
            const filePath = path.join(songsDir, file);
            const content = fs.readFileSync(filePath, 'utf-8'); // Read file content synchronously

            const $ = cheerio.load(content); // Load content into cheerio
            const title = $('h1').text().trim(); // Extract title from <h1>
            const album = $('h2').text().replace('Album:', '').trim(); // Extract album from <h2>
            const author = $('h3').text().trim(); // Extract author from <h3>

            // Push the song details into the songs array
            songs.push({
                file: file,
                title: title,
                album: album,
                author: author
            });
        }
    });

    // Write the songs array to a JSON file
    fs.writeFileSync(outputFilePath, JSON.stringify(songs, null, 2));
    console.log('songs.json generated successfully.');
});
