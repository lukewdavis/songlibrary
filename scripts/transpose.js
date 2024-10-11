const chordMap = {
    'C': ['C', 'G', 'Am', 'F', 'C/E'],
    'C#': ['C#', 'G#', 'A#m', 'F#', 'C#/E#'],
    'D': ['D', 'A', 'Bm', 'G', 'D/F#'],
    'D#': ['D#', 'A#', 'C#m', 'G#', 'D#/F##'],
    'E': ['E', 'B', 'C#m', 'A', 'E/G#'],
    'F': ['F', 'C', 'Dm', 'Bb', 'F/A'],
    'F#': ['F#', 'C#', 'D#m', 'B', 'F#/A#'],
    'G': ['G', 'D', 'Em', 'C', 'G/B'],
    'G#': ['G#', 'D#', 'F#m', 'C#', 'G#/B'],
    'A': ['A', 'E', 'F#m', 'D', 'A/C#'],
    'A#': ['A#', 'F', 'G#m', 'D#', 'A#/C#'],
    'B': ['B', 'F#', 'G#m', 'E', 'B/D#']
};

let originalLyrics = ''; // Declare this variable to hold the original lyrics

// Function to initialize lyrics and key on page load
document.addEventListener("DOMContentLoaded", function() {
    const lyricsElement = document.getElementById('lyric-content');
    originalLyrics = lyricsElement.textContent; // Capture the original lyrics
    document.getElementById('key-select').value = 'C'; // Default key
    changeKey(); // Initialize with default key
});

function changeKey() {
    const keySelect = document.getElementById('key-select');
    const selectedKey = keySelect.value;

    // Start with the original lyrics
    let transposedLyrics = originalLyrics;

    // Replace original chords with the chords in the selected key
    for (const [key, chords] of Object.entries(chordMap)) {
        if (key === selectedKey) {
            // No need to replace if it's the same key
            continue;
        }

        chords.forEach((chord, index) => {
            const regex = new RegExp(`\\b${chord}\\b`, 'g');
            transposedLyrics = transposedLyrics.replace(regex, chordMap[selectedKey][index]);
        });
    }

    // Update the displayed lyrics
    document.getElementById('lyric-content').textContent = transposedLyrics;
}
