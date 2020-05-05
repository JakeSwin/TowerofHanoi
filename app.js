const columnOne = document.querySelector("#col-one")
const columnTwo = document.querySelector("#col-two")
const columnThree = document.querySelector("#col-three")

let hand = {
    html: null,
    value: null
}

let rings = [
    [5,4,3,2,1],[],[]
]

let peek = a => a[a.length - 1]

columnOne.addEventListener("click", () => {
    //If nothing in hand
    if (hand.value !== null && (hand.value < peek(rings[0]) || peek(rings[0]) === undefined) ) {
        //Add to start of element
        columnOne.children[0].prepend(hand.html)
        rings[0].push(hand.value)

        hand.html = null
        hand.value = null
    } else if (hand.value === null) {
        //columnOne.children[0].children[0]
        let TopItem = columnOne.children[0].children[0]
        if (TopItem.classList[0] === "ring") {
            //Remove top child
            columnOne.children[0].removeChild(TopItem)
            hand.html = TopItem
            hand.value = rings[0].pop()
            //Console.log HTML object
            console.log(hand)
        }
    }
})

columnTwo.addEventListener("click", () => {
    if (hand.value !== null && (hand.value < peek(rings[1]) || peek(rings[1]) === undefined) ) {
        //Add to start of element
        columnTwo.children[0].prepend(hand.html)
        rings[1].push(hand.value)

        hand.html = null
        hand.value = null
    } else if (hand.value === null) {
        //columnTwo.children[0].children[0]
        let TopItem = columnTwo.children[0].children[0]
        if (TopItem.classList[0] === "ring") {
            //Remove top child
            columnTwo.children[0].removeChild(TopItem)
            hand.html = TopItem
            hand.value = rings[1].pop()
            //Console.log HTML object
            console.log(hand)
        }
    }
})

columnThree.addEventListener("click", () => {
    if (hand.value !== null && (hand.value < peek(rings[2]) || peek(rings[2]) === undefined) ) {
        //Add to start of element
        columnThree.children[0].prepend(hand.html)
        rings[2].push(hand.value)

        hand.html = null
        hand.value = null
    } else if (hand.value === null) {
        //columnThree.children[0].children[0]
        let TopItem = columnThree.children[0].children[0]
        if (TopItem.classList[0] === "ring") {
            //Remove top child
            columnThree.children[0].removeChild(TopItem)
            hand.html = TopItem
            hand.value = rings[2].pop()
            //Console.log HTML object
            console.log(hand)
        }
    }
})