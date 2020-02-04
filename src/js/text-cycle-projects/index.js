const text2Cycle = ['creative coding', 'brutalism', 'anything on hoverstat.es', 'Soviet history', 'graffiti', 'Italian futurism', 'Yugoslav history', 'JavaScript'
];

textSequence2(0);
function textSequence2(i) {
    if (text2Cycle.length > i) {
        setTimeout(function() {
            document.querySelector(".text-animate-projects").innerHTML = text2Cycle[i];
            textSequence2(++i);
        }, 1000); // 1 second (in milliseconds)

    } else if (text2Cycle.length == i) { // Loop
        textSequence(0);
    }

}