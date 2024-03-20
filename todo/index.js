const input = document.querySelector("#affiche");

const btn = document.querySelector("button")

const target = document.querySelector("#list")





btn.addEventListener("click",function(e){

          e.preventDefault()

    let li = document.createElement("li")

    if(input.value !== ""){

        li.innerHTML = input.value
        target.append(li)
        input.value = ""

        li.addEventListener("click",function(e){
            e.target.classList.toggle("cross")
        })

    }else{
        alert("Enter a task")
    }



})











