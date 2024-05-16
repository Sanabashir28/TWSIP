import{featuresproductnav}from


let input_search=document.getElementById("search_input")
let  form_search=document.getElementById("search_form")
let recent_searchE1=document.querySelector(".recent_search")

let recentArray=["mobile,phone"]
form_search.addEventListener("submit",(e)=>{
    e.preventDefault()
    recentArray.unshift(input_search.value)
    console.log(recentArray)
    renderrecent()
})

function renderRecent(){
    let recent_search_html=''
     recentArray.foreach( el=> {
        recent_search_html+=`
        <div class="recent_list">
        <i class="fasolid fa-clock-rotate-left"><i>
        <p>${el}</p>
        </div>
     })
  recent_searchE1.innerHTML=recent_search_html;
}
renderRecent()