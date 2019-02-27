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
  