// Set the date we're counting down to
var countDownDate = new Date("Oct 15, 2022 09:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  //document.getElementById("hitung-mundur").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  document.getElementById("days").innerText = days,
  document.getElementById("hours").innerText = hours,
  document.getElementById("minutes").innerText = minutes,
  document.getElementById("seconds").innerText = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Akad Nikah Telah Dilaksanakan";
  }
}, 1000);

function myFunction() {
  // Copy the text inside the text field
  navigator.clipboard.writeText("4790483435");
  
  // Alert the copied text
  alert("Ingin menyalin nomor rekening?");
}

function myFunction1() {
  
  // Copy the text inside the text field
  navigator.clipboard.writeText("a.n Mohammad Ryan Noor Said \n Jl. Otista Raya. Simpang tiga Cimanggis. RT:001/RW:10. No.39. Cimanggis, Ciputat, Kota Tangerang Selatan, Banten. Kode Pos 15411");

  // Alert the copied text
  alert("Ingin menyalin alamat lengkap?");
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
