function sortList() {
    var ul, li, switching, i, shouldSwitch, txtValueA, txtValueB;
    ul = document.getElementById("songList");
    li = ul.getElementsByTagName('li');
    switching = true;

    console.log("HERE");

    while (switching) {
        switching = false;
        for (i = 0; i < li.length - 1; i++) {
            var a = li[i].getElementsByTagName("a")[0];
            var b = li[i + 1].getElementsByTagName("a")[0];
            txtValueA = a.textContent || a.innerText;
            txtValueB = b.textContent || b.innerText;

            console.log(`Comparing "${txtValueA}" with "${txtValueB}"`);

            if (txtValueA.toLowerCase() > txtValueB.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            li[i].parentNode.insertBefore(li[i + 1], li[i]);
            switching = true;
        }
    }
}
