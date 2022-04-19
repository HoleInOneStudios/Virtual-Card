let message = {
    to: undefined,
    from: undefined,
    color: undefined,
    occasion: undefined,
    note: undefined,
}

let encrypted;
let encryptedMessage;
let decryptedMessage;

let titleEl;
let fromEl;
let noteEl;

function start() {
    let searchParams = new URLSearchParams(window.location.search);

    encryptedMessage = searchParams.get('message') || "";
    encrypted = searchParams.get('encrypt') == 'true';

    if (encrypted) {
        decryptedMessage = JSON.parse(atob(encryptedMessage));

        message.to = decryptedMessage.to;
        message.from = decryptedMessage.from;
        message.occasion = decryptedMessage.occasion;
        message.color = decryptedMessage.color;
        message.note = decryptedMessage.note;
    }
    else {
        message.to = searchParams.get('to') || "You";
        message.from = searchParams.get('from') || "Me";
        message.occasion = searchParams.get('occasion') || "Special Day";
        message.color = searchParams.get('color') || "white";
        message.note = searchParams.get('note') || "";
    }

    //console.table({ "to": message.to, "from": message.from, "occasion": message.occasion, "color": message.color, "note": message.note, "encrypted": encrypted, "encryptedMessage": encryptedMessage });

    titleEl = document.getElementById('title');
    titleEl.innerText = `Happy ${message.occasion}, ${message.to}!`;

    noteEl = document.getElementById('note');
    noteEl.innerText = message.note;

    fromEl = document.getElementById('from');
    fromEl.innerText = `From ${message.from}`;

    document.title = `${message.occasion} Card`;

    document.body.style.backgroundColor = message.color;
}