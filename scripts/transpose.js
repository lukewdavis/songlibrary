
function changeKey() {
    const keySelect = document.getElementById('key-select');
    const selectedKey = keySelect.value;
    originalChords = chordMap[selectedKey];

    // Print the selected key to the console
    console.log(`Selected Key: ${selectedKey}`);
}
