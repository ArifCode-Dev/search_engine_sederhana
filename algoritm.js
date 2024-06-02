const keywords = [
    "javascript",
    "rush",
    "html",
    "css",
    "java",
    "c#",
    "c",
    "algoritma dan pemprograman",
    "siapa pencipta algoritma?"
];

const jawaban = [
    "Penemu algoritma adalah Al Khawarizmi, seorang jenius yang mahir dalam matematika, geografi, astronomi, dan lain sebagainya. Dalam bukunya The History of Arab, Phillip K. Hitti menyebut Al Khawarizmi sebagai tokoh utama pada awal sejarah matematikan Arab.",
];

function searchClick() {
    let searchInput = document.getElementById("searchInput").value;
    let outputSearch = document.getElementById("output");

    let searchResult = algoritma(searchInput);

    if (searchResult) {
        outputSearch.innerHTML = `
            <p>${searchResult}</p>
        `;
    } else {
        outputSearch.innerHTML = `
            <p>Kata kunci tidak ditemukan!</p>
        `;
    }

    function algoritma(searchInput) {
        for (let i = 0; i <= keywords.length; i++) {
            if (keywords[i].includes(searchInput)) {
                if (keywords[i] === jawaban[1]) {
                    i += keywords.length;
                    return jawaban[1];
                } else {
                    return searchInput;
                }
            }
            console.log(i);
        }
        return null;
    }
}
console.log(keywords.length);