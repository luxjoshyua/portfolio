const example = ['Hi', 'I', 'am', 'looking', 'for',
    'frontend', 'coding', 'opportunities', 'right', 'now!',
    'please', 'contact', 'me', 'at', 'josh.e.fielding@gmail.com'
];

textSequence(0);
function textSequence(i) {
    if (example.length > i) {
        setTimeout(function() {
            document.querySelector(".text-animate").innerHTML = example[i];
            textSequence(++i);
        }, 1000); // 1 second (in milliseconds)

    } else if (example.length == i) { // Loop
        textSequence(0);
    }

}