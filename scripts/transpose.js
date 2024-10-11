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
