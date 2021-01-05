define([
  '../var/document',
  '../var/support'
], function (document, support) {
  'use strict';

  (function () {
    let input = document.createElement('input')
    const select = document.createElement('select')
    const opt = select.appendChild(document.createElement('option'))

    input.type = 'checkbox'

    // Support: Android <=4.3 only
    // Default value for a checkbox should be "on"
    support.checkOn = input.value !== ''

    // Support: IE <=11 only
    // Must access selectedIndex to make default options select
    support.optSelected = opt.selected

    // Support: IE <=11 only
    // An input loses its value after becoming a radio
    input = document.createElement('input')
    input.value = 't'
    input.type = 'radio'
    support.radioValue = input.value === 't'
  })()

  return support
})
