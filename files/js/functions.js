let value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
let main_selector="main"
let small_selector="right"

function createCard(){
    var start = document.createElement("DIV");
    var img_wrapper= document.createElement("DIV");
    img_wrapper.className="card-image"
    var img = document.createElement("IMG");
    //random select image
    var imageID = Math.floor(Math.random() * 4+1);
    img.src="images/image"+imageID+".png"
    img_wrapper.appendChild(img)
    var text_wrapper = document.createElement("DIV")
    text_wrapper.className="card-text"
    //random genereate text length 
    var text_repeat=  Math.floor(Math.random() * 4)
    var text=document.createTextNode(value.repeat(text_repeat))
    text_wrapper.appendChild(text)
    start.appendChild(img_wrapper)
    start.appendChild(text_wrapper)
    return start;
}
function removeCard(cards){
    if(cards.length>0){
        var index=  Math.floor(Math.random() * cards.length)
        cards[index].parentNode.removeChild(cards[index])
    }
}
function addRandom1(){
    var card = createCard()
    card.className="card"
    document.getElementById(main_selector).appendChild(card)

}
function removeRandom1(){
    var select = document.getElementById(main_selector)
    var cards = select.querySelectorAll('.card')
    //randomly select item to remove 
    removeCard(cards)
    
}
function addRandom2(){
    var card = createCard()
    card.className="small-card"
    document.getElementById(small_selector).appendChild(card)

}
function removeRandom2(){
    var select = document.getElementById(small_selector)
    var cards = select.querySelectorAll('.small-card')
    //randomly select item to remove 
    removeCard(cards)
}
