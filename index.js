// DOM API
const submit_btn = document.querySelector(".submit_btn");
const new_input = document.querySelector(".new_input");
const item_list = document.querySelector(".innercontainer");
const search_input = document.querySelector("#Search")
console.log(search_input)
//event

search_input.addEventListener(
  "keyup",

  function (event) {
     
     const search_text = event.target.value.toLowerCase ;
     const all_lists = item_list.querySelectorAll("#list"); 

     for (let i = 0; i < all_lists.length; i++){
        const list_text = all_lists[i].querySelector('h2').textContent;
     
    if(list_text.toLowerCase().indexOf(search_text) !== -1){
      all_lists[i].style.display = 'block';
    } else{
      all_lists[i].style.display = 'none';
    }
     }
  }
)
submit_btn.addEventListener(
  "click",

  function () {

    if(new_input.value ===''){
      alert('Task invalid!')
      return
    }
  
  item_list.innerHTML += `<div class = "container1" id ="list">
                          <h2>${new_input.value}</h2>
                          <i id='delete' class="fa-solid fa-trash-can" color="red"></i>
                          </div>`
                          
          new_input.value = ""
          
  }
);

item_list.addEventListener(
  "click",
  function (event) {
    if(event.target.id === "delete"){
     const element_parent = event.target.parentElement;
      console.log(event.target.parentElement);

     item_list.removeChild(element_parent)
    }
    

  }
  );
  


