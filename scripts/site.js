import $ from "jquery";
import getWeather from './apiCall'
import getContext from './getContext'
import createHTML, {createInputError} from './createHTML'

import "az-styles";
import "bootstrap";

const cityPartial = require('../views/partials/city.hbs')
const detailsPartial = require('../views/partials/details.hbs')
const warningPartial = require('../views/partials/warning.hbs')


$(document).ready(function () {
  // DOM caching
  const $form = $('#form')
  const btn = $form.find('button')
  const input = $form.find('input')
  const $city = $form.next()
  const details = $city.next()

  const clearAll = () => {
    input.val('')
    $city.text('')
    input.parent().removeClass('has-error')
    input.next().remove()
    details.html('')
  }

  btn.click(
    () => {
      const city = input.val()
      clearAll()
      if (city) {
        getWeather(city)
        .then((res)=>res.data.query)
        .then((query)=>{
          if (query.count > 0) {
            var data = query.results.channel

            if (data.location.country !== 'United States') {
              const context = {
                title: "We only support US lookup",
                text: "Please enter a valid US city/state"
              }
              createHTML(context, warningPartial, 'details')
            } else {
              let context = getContext(data)
              createHTML(context, cityPartial, 'city')
              createHTML(context, detailsPartial, 'details')
            }
          } else {
            const context = {
              title: "No result found",
              text: "Please enter a valid US city/state"
            }
            createHTML(context, warningPartial, 'details')
          }
        })
      } else {
        const context = {
          inputField: input.attr('id'),
          text: 'Please enter a city/state'
        }
        createInputError(input, context)
      }
    }
  )

});
