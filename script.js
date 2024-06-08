let inventory = [];
let viewing;
let local;
let currItem = 0;
let stat;




const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const roominfo = document.querySelector('#RoomInfo');
const objectName = document.querySelector('#objectName');
const infolocation = document.querySelector('#infoLocation');
const text = document.querySelector("#text");

const items = [
    {name: 'key', unlocks: "handcuffs"},
    {name: 'code', unlocks: "keypad"},
    {name: 'Hidden Key', unlocks: "Door"}
]

const looking = [
    {
        location: "bed",
        object: "key",

    },
    {
        Location: "Bedroom",
        Object: "nothing"
    },
    {
        location: "hallway",
        object: "keypad",

    },
    {
        location: "Bathroom",
        object: "Mirror"
    },
    {
        location: "shower",
        object: "switch",
    },
    {
        location: "Bathroom",
        object:"KeyPad Code"
    }

]

const locations = [
    {
        name: "bed",
        "button text": ["look","pickup","use"],
        "button functions": [lookBed, pickup, useBed],
        text: "you are handcuffed to a bed "
        
    },
    {
        name: "bedRoom",
        "button text": ["look","use","move"],
        "button functions": [look, useBedRoom, moveBedroom],
        text: "you're in your bed room \"I wonder how I got handcuffed?\""
    },
    {
        name: "hallway",
        "button text": ["look","use","move"],
        "button functions": [look, useDoor, moveHall],
        text: "you're in the hallway you see a locked door"
    },
    {
        name: "hallway Direction",
        "button text": ["Bathroom","look","Bedroom"],
        "button functions": [moveToBath,look,moveToBed],
        text: "you're in a hallway where next?"  
    },
    {  
        name: "bathroom",
        "button text": ["look","use","move"],
        "button functions": [look, useBathroom,moveBath],
        "text": "You are in a bathroom you see a shower and a Smudged mirror"
    },
    {   
        name: "shower",
        "button text": ["look","use","move"],
        "button functions": [look,useShower,moveShower],
        "text": "you're in a shower you feel cold lets warm things up"
    },
    {
        name: "bathroom",
        "button text": ["look","use","move"],
        "button functions": [look, useBathroom,moveBath],
        "text": "You are in a bathroom you see a shower and the mirror shows a series of previously hidden numbers"
    },
    {
        name: "Win",
        "button text": ["replay?","replay?","replay?"],
        "button functions": [replay,replay,replay],
        "text": "well done"
    }
    

]


// Initialise buttons

button1.onclick = lookBed;
button2.onclick = pickup;
button3.onclick = useBed;

function update(location) {
    roominfo.style.display = "none";
    button1.innerText = locations["button text"][0];
    button2.innerText = locations["button text"][1];
    button3.innerText = locations["button text"][2];
    button1.onclick = locations["button functions"][0];
    button2.onclick = locations["button functions"][1];
    button3.onclick = locations["button functions"][2];
    text.innerHTML = locations.text;
}

function useBed(){
    update(location[1])
}



