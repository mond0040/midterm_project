$(document).ready(function () {
  $('.targetDiv').hide()
  $('#div1').show()
  $('#num1').show()
  $('.showSingle').click(function () {
    $('.showSingle').each(function () {
      $(this).removeClass('current')
    })
    $(this).addClass('current')
    $('.targetDiv').hide()
    $('#div' + $(this).attr('target')).show()
    $('#num' + $(this).attr('target')).show()
  })
})

// Loading
var myVar

function myFunction () {
  myVar = setTimeout(showPage, 3000)
}

function showPage () {
  document.getElementById('loader').style.display = 'none'
  document.getElementById('myDiv').style.display = 'block'
}
// Scrolling Smooth
$(document).ready(function () {
  $('body').scrollspy({target: '.navbar', offset: 50})

  $('#myNavbar a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault()
      var hash = this.hash
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash
      })
    }
  })
})
