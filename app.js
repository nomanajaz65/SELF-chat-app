function addMessage(){
    var val = document.getElementById('val')
    var p =document.createElement('p')
    var textNode = document.createTextNode(val.value)

    // target div now
    p.appendChild(textNode)
     var messages = document.getElementById('messages')
     messages.appendChild(p)

    //  removing previous msgs
    val.value= " "
    
}