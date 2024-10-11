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

let originalLyrics = ''; // Initialize empty variable to hold lyrics

function changeKey() {
    const keySelect = document.getElementById('key-select');
    const selectedKey = keySelect.value;

    // Iterate over the chord map to transpose the chords
    for (const [key, chords] of Object.entries(chordMap)) {
        const regex = new RegExp(`\\b${key}\\b`, 'g');
        
        // Check if the key is not the selected key
        if (key !== selectedKey) {
            chords.forEach((chord, index) => {
                transposedLyrics = transposedLyrics.replace(regex, chordMap[selectedKey][index]);
            });
        }
    }

    // Update the displayed lyrics
    document.getElementById('lyric-content').textContent = transposedLyrics;
}
