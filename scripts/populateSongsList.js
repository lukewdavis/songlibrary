async function populateSongList() {
    try {
        const response = await fetch('/songs/songs.json'); // Ensure this endpoint returns your JSON data
        const songs = await response.json();
        const songList = document.getElementById('songList');

        songs.forEach(song => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="songs/${song.file}">${song.title} - ${song.artist}</a>`;
            songList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching song list:', error);
    }
}
