let to;
let from;
let color;
let occasion;
let titleEl;
let fromEl;

function start() {
    let searchParams = new URLSearchParams(window.location.search);

    to = searchParams.get('to') || "You";
    from = searchParams.get('from') || "Me";
    occasion = searchParams.get('occasion') || "Special Day";
    color = searchParams.get('color') || "white";

    console.table({ "to": to, "from": from, "occasion": occasion, "color": color });

    titleEl = document.getElementById('title');
    titleEl.innerText = `Happy ${occasion}, ${to}!`;

    fromEl = document.getElementById('from');
    fromEl.innerText = `From ${from}`;

    document.title = `${occasion} Card`;

    document.body.style.backgroundColor = color;
}