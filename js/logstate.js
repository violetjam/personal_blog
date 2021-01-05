function setCookie (cname, cvalue, exdays) {
  const d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + d.toGMTString()
  document.cookie = cname + '=' + cvalue + ';' + expires
}
function getCookie (cname) {
  const name = cname + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim() // trim()去除字符串两侧的空白字符
    if (c.indexOf(name) == 0) {
      console.log('index')
      return c.substring(name.length, c.length)
    }
  }
  return ''
}
function delCookie (name) {
  const d = new Date()
  d.setTime(d.getTime() - 1)
  const cval = getCookie(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + d.toGMTString()
    console.log('3')
  }
}
function checkCookies () {
  const user = getCookie('username')
  if (user != '') {
    showuser()
    console.log('1')
  } else {
    console.log('2')
    const user2 = document.getElementById('user')
    const option = document.createElement('div')
    option.setAttribute('id', 'option')
    option.innerHTML = '登录  |  注册'
    const sign = document.createElement('a')
    sign.setAttribute('id', 'sign')
    sign.setAttribute('href', 'signin.html')
    sign.appendChild(option)
    user2.appendChild(sign)
  }
}
function showuser () {
  const user = document.getElementById('user')
  const avatar = document.createElement('div')
  const img = document.createElement('img')
  const option = document.createElement('div')
  const nav = document.getElementById('nav_left_list')
  const write = document.createElement('li')
  const a = document.createElement('a')
  const btn = document.createElement('button')
  btn.setAttribute('type', 'write')
  btn.innerHTML = '写博文'
  a.setAttribute('href', 'write.html')
  a.setAttribute('name', 'link')
  write.setAttribute('id', 'write')
  a.appendChild(btn)
  write.appendChild(a)
  nav.appendChild(write)
  option.setAttribute('id', 'option')
  option.setAttribute('onclick', 'exit();')
  option.innerHTML = '登出'
  avatar.setAttribute('id', 'avatar')
  img.setAttribute('src', 'img/avatar.jpg')
  avatar.appendChild(img)
  user.appendChild(avatar)
  user.appendChild(option)
}
function exit () {
  const user = document.getElementById('user')
  delCookie('username')
  const url = window.location.pathname
  if (url != '/index.html' && url != '/blog/index.html') {
    document.getElementById('write').remove()
  }
  document.getElementById('option').remove()
  document.getElementById('avatar').remove()
  const option = document.createElement('div')
  option.setAttribute('id', 'option')
  option.innerHTML = '登录  |  注册'
  const sign = document.createElement('a')
  sign.setAttribute('id', 'sign')
  sign.setAttribute('href', 'signin.html')
  sign.appendChild(option)
  user.appendChild(sign)
}
