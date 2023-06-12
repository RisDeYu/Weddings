function myFunction() {
  var copyText = 4790483435

  copyText.select();
  copyText.setSelectionRange(0, 9999999999)
  // Copy the text inside the text field
  navigator.clipboard.writeText("4790483435");
  
  // Alert the copied text
  //alert("Ingin menyalin nomor rekening?");
}

function myFunction1() {
  
  // Copy the text inside the text field
  navigator.clipboard.writeText("026101088836500");

  // Alert the copied text
  //alert("Ingin menyalin nomor rekening?");
}

document.getElementById("comment-form").addEventListener("submit", function(e) {
  e.preventDefault();
  
  var name = document.getElementById("name-input").value;
  var comment = document.getElementById("comment-input").value;
  
  if (name.trim() !== "" && comment.trim() !== "") {
    var commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.innerHTML = '<span class="commenter">' + name + '</span><div class="content">' + comment + '</div>';
    
    document.querySelector(".comment-list").appendChild(commentElement);
    
    document.getElementById("name-input").value = "";
    document.getElementById("comment-input").value = "";
  }
});
