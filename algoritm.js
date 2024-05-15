const kataKunci = [
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

let algoritma = (searchEngine) => {
    
    let x;
    for(let i = 0; i <= kataKunci.length; i++) {
        if(searchEngine == kataKunci[i]) {
            x = (kataKunci[i]);
            if(kataKunci.slice(8) == x) {
                x = ("Penemu algoritma adalah Al Khawarizmi, seorang jenius yang mahir dalam matematika, geografi, astronomi, dan lain sebagainya. Dalam bukunya The History of Arab, Phillip K. Hitti menyebut Al Khawarizmi sebagai tokoh utama pada awal sejarah matematikan Arab.");
                
            }

            console.log(x);
            
        }
        
    }

    if(x == undefined){
        console.log("kata kunci tidak ditemukan!");

    }

}

let searchEngine = algoritma("siapa pencipta algoritma?");