let count=1
document.querySelector('#task-btn').addEventListener('click',()=>{
    const inputvalue=document.querySelector("#input-value");
    const inputElement=inputvalue.value
    //   creating tr and th, td and dynamically insert data
    const tr=document.createElement('tr');
  tr.innerHTML=`
<th>${count++}</th>
<td>${inputElement}</td>
  <td>
        <button class="done-btn btn btn-success btn-xs">Done</button>
        <button class="delete-btn btn btn-error btn-xs">Delete</button>
    </td>
  `;
    //   injecting to html
    const container=document.querySelector('#content-container');
    container.appendChild(tr);

      //   clear the input field
  document.getElementById("input-value").value = "";
  //   deleting the delete button
const deletBtn=document.querySelectorAll('.delete-btn');
for (const btn of deletBtn) {
    btn.addEventListener('click',function(e){
        e.target.parentElement.parentElement.style.textDecoration ="line-through";
    })
    
}
  //   complete the Done button
  const doneBtns = document.querySelectorAll(".done-btn");
  for (let btn of doneBtns) {
    btn.addEventListener("click", function (e) {
      e.target.parentElement.parentElement.style.textDecoration =
        "line-through";
    });
  }
    //   comeplete clear all button 
    document.querySelector("#clear-btn").addEventListener("click", function (e) {
        // console.log(e.target.parentElement.parentElement.children[0].children[1]);
        e.target.parentElement.parentElement.children[0].children[1].style.display =
          "none";
    
        //   disable the clear all button
        e.target.style.display = "none";
      });

})
