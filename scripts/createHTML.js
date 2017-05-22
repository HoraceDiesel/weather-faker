const inputErrorView = require('../views/partials/inputError.hbs')

const createHTML = (data, template, position) => {
  var html    = template(data)
  $(`#${position}`).html(html)
}

export const createInputError = (input, data) => {
  const parent = input.parent()
  parent.addClass('has-error')
  input.after(inputErrorView(data))
}

export default createHTML
