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
            
            // Use the specific IDs to extract information
            const title = $('#title').text().trim(); // Extract title using ID
            const album = $('#album').text().replace('Album: ', '').trim(); // Trim "Album: " from album
            const artist = $('#artist').text().trim(); // Extract artist using ID

            // Push the song details into the songs array
            songs.push({
                file: file,
                title: title,
                album: album,
                artist: artist // Updated key to artist
            });
        }
    });

    // Write the songs array to a JSON file
    fs.writeFileSync(outputFilePath, JSON.stringify(songs, null, 2));
    console.log('songs.json generated successfully.');
});
