// function text(){
//     event.preventDefault()
//     var res =document.getElementById('input')
//     if(res.value){
//       console.log(res.value);
//     }else{
//         alert("required")
//     }
    
// }

function text() {
  // event.preventDefault();
  var x = document.getElementById('input').value
var y = document.getElementById('posted');
y.append(x);
  
}
function like(){
  var res = document.getElementById("like-func")
  if(res){
    res.style.backgroundColor="blue"
  }else{
    res.style.backgroundColor="white"
  }

}
function comment(){
  var com = document.getElementById('comment-func');
  var box = document.getElementById('comm-box');
box.focus()
} 

