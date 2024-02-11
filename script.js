document.getElementById('hugBtn').addEventListener('click', function() {
  var message = document.getElementById('message').value;
  var hugImg = document.getElementById('hugImg');
  hugImg.innerHTML = '<img src="https://media.giphy.com/media/l0ExhBpyIOEfCVfwY/giphy.gif">';
  hugImg.style.display = 'block';
  alert("Your romantic message: " + message);
});
