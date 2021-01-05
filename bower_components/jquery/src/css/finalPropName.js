define([
  '../var/document',
  '../core'
], function (document, jQuery) {
  'use strict'

  const cssPrefixes = ['Webkit', 'Moz', 'ms']
  const emptyStyle = document.createElement('div').style
  const vendorProps = {}

  // Return a vendor-prefixed property or undefined
  function vendorPropName (name) {
    // Check for vendor prefixed names
    const capName = name[0].toUpperCase() + name.slice(1)
    let i = cssPrefixes.length

    while (i--) {
      name = cssPrefixes[i] + capName
      if (name in emptyStyle) {
        return name
      }
    }
  }

  // Return a potentially-mapped jQuery.cssProps or vendor prefixed property
  function finalPropName (name) {
    const final = jQuery.cssProps[name] || vendorProps[name]

    if (final) {
      return final
    }
    if (name in emptyStyle) {
      return name
    }
    return vendorProps[name] = vendorPropName(name) || name
  }

  return finalPropName
})
