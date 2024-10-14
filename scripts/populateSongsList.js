async function populateSongList() {
    try {
        const response = await fetch('/songs/songs.json');
        
        // Log the response for debugging
        const text = await response.text();
        // console.log('Response:', text);
        
        const songs = JSON.parse(text);
        const songList = document.getElementById('songList');

        songs.forEach(song => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="songs/${song.file}">${song.title} - ${song.artist} (Album: ${song.album.replace('Album: ', '')})</a>`;
            songList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching song list:', error);
    }
}
