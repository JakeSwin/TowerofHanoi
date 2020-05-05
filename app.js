const columnOne = document.querySelector("#col-one")
const columnTwo = document.querySelector("#col-two")
const columnThree = document.querySelector("#col-three")
const container = document.querySelector(".container")

let hand = {
    html: null,
    value: null
}

let rings = [
    [5,4,3,2,1],[],[]
]

let peek = a => a[a.length - 1]

let checkWin = () => {
    if (arraysEqual(rings[2], [5,4,3,2,1])) {
        let winMsg = document.createElement("h2")
        winMsg.textContent = "You Won"
        winMsg.setAttribute("id", "win-msg")
        container.prepend(winMsg)
    }
}

let arraysEqual = (a, b) => {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

let makeMove = (column, i) => {
    if (hand.value !== null && (hand.value < peek(rings[i]) || peek(rings[i]) === undefined)) {
        //Add to start of element
        column.children[0].prepend(hand.html)
        rings[i].push(hand.value)

        hand.html = null
        hand.value = null
        checkWin()
    } else if (hand.value === null) {
        //column.children[0].children[0]
        let TopItem = column.children[0].children[0]
        if (TopItem.classList[0] === "ring") {
            //Remove top child
            column.children[0].removeChild(TopItem)
            hand.html = TopItem
            hand.value = rings[i].pop()
            //Console.log HTML object
            console.log(hand)
        }
    }
}

columnOne.addEventListener("click", () => {
    makeMove(columnOne, 0)
})

columnTwo.addEventListener("click", () => {
    makeMove(columnTwo, 1)
})

columnThree.addEventListener("click", () => {
    makeMove(columnThree, 2)
})