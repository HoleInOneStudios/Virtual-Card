let mother;
let from;
let color;
let titleEl;
let fromEl;

function start() {
    mother = new URLSearchParams(window.location.search).get('mother') || "Mom";
    from = new URLSearchParams(window.location.search).get('from') || "Your Child";
    color = new URLSearchParams(window.location.search).get('color') || "white";
    console.log(mother, from, color);

    titleEl = document.getElementById('title');
    titleEl.innerText = `Happy Mother's Day, ${mother}!`;

    fromEl = document.getElementById('from');
    fromEl.innerText = `From ${from}`;

    document.body.style.backgroundColor = color;
}