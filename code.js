document.addEventListener('click', function (click) {
  console.log(click.target);
  if (click.target = document.getElementById('home')) {
    click.target.classList.add('active')
  }
})