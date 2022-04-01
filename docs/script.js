let to;
let from;
let color;
let occasion;
let note;
let titleEl;
let fromEl;
let noteEl;

function start() {
    let searchParams = new URLSearchParams(window.location.search);

    to = searchParams.get('to') || "You";
    from = searchParams.get('from') || "Me";
    occasion = searchParams.get('occasion') || "Special Day";
    color = searchParams.get('color') || "white";
    note = searchParams.get('note') || "";

    console.table({ "to": to, "from": from, "occasion": occasion, "color": color });

    titleEl = document.getElementById('title');
    titleEl.innerText = `Happy ${occasion}, ${to}!`;

    noteEl = document.getElementById('note');
    noteEl.innerText = note;

    fromEl = document.getElementById('from');
    fromEl.innerText = `From ${from}`;

    document.title = `${occasion} Card`;

    document.body.style.backgroundColor = color;
}