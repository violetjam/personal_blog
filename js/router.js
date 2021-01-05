
function display_page (url) {
  const s = 'data' + url + '.json'
  $.get(s, function (result) {
    $.each(result, function (index, obj) {
      const html = template('template', obj)
      $('#main_template_list').append(html)
    })
    $('.pic img').zoomify()
  })
}
function switch_path (path) {
  switch (path) {
    case '/log':
      $('#main_template_list').empty()
      display_page(path)
      $('#writeArticle').show()
      $('#em_log').css('color', '#18CFA9')
      $('#em_painter').css('color', '#8a8a8a')
      $('#svg_log').css('fill', '#18CFA9')
      $('#svg_painter').css('fill', '#8a8a8a')
      break
    case '/painter':
      $('#main_template_list').empty()
      display_page(path)
      $('#writeArticle').hide()
      $('#em_log').css('color', '#8a8a8a')
      $('#em_painter').css('color', '#18CFA9')
      $('#svg_painter').css('fill', '#18CFA9')
      $('#svg_log').css('fill', '#8a8a8a')
      break
    case '':
      $('#main_template_list').empty()
      path = '/log'
      display_page(path)
      $('#writeArticle').show()
      $('#em_log').css('color', '#18CFA9')
      $('#em_painter').css('color', '#8a8a8a')
      $('#svg_log').css('fill', '#18CFA9')
      $('#svg_painter').css('fill', '#8a8a8a')
      break
  }
}
$(function () {
  const hash = window.location.hash
  const path = hash.substring(1)
  switch_path(path)
})
window.onhashchange = function () {
  const hash = window.location.hash
  const path = hash.substring(1)
  switch_path(path)
}
