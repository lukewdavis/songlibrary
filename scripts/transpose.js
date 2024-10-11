const chordMap = {
    'C': ['C', 'G', 'Am', 'F'],
    'D': ['D', 'A', 'Bm', 'G'],
    'E': ['E', 'B', 'C#m', 'A'],
    'F': ['F', 'C', 'Dm', 'Bb'],
    'G': ['G', 'D', 'Em', 'C'],
    'A': ['A', 'E', 'F#m', 'D'],
    'B': ['B', 'F#', 'G#m', 'E']
};

const originalChords = ['C', 'G', 'Am', 'F'];

function changeKey() {
    const keySelect = document.getElementById('key-select');
    const selectedKey = keySelect.value;

    let transposedLyrics = document.getElementById('lyric-content').textContent;

    originalChords.forEach((chord, index) => {
        const regex = new RegExp(`\\b${chord}\\b`, 'g');
        transposedLyrics = transposedLyrics.replace(regex, chordMap[selectedKey][index]);
    });

    document.getElementById('lyric-content').textContent = transposedLyrics;
}

// Set default key when the page loads
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('key-select').value = 'C'; // Default key
});
