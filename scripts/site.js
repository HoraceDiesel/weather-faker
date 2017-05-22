import $ from "jquery";
import getWeather from './api_call'

import "az-styles";
import "bootstrap";

var Handlebars = require('handlebars')

$(document).ready(function () {
  // DOM caching
  const $form = $('#form')
  const btn = $form.find('button')
  const input = $form.find('input')

  const getContext = (data) => {
    // console.log(data.item)
    return {
      city: data.location.city,
      forecast: [
        ...data.item.forecast
      ]
    }
  }

  const createCityHTML = (data) => {
    // var source   = $('#stats-template').html()
    var source   = '<h4>{{city}}</h4>'
    var template = Handlebars.compile(source)
    var html    = template(data)
    $('#city').html(html)
    console.log(source)
  }

  const createDetailHTML = (data) => {
    // var source   = $("#details-template").html()
    var source = `
      {{#each forecast}}
        <tr>
          <td>{{date}}</td>
          <td>{{low}}</td>
          <td>{{high}}</td>
          <td>{{text}}</td>
        </tr>
      {{/each}}

    `
    var template = Handlebars.compile(source)
    var html    = template(data)
    $('#details').html(html)
    console.log(source)
  }

  btn.click(
    () => {
      const city = input.val()
      if (city) {
        getWeather(city).then((res)=>{
          const data = res.data.query.results.channel
          if (data.location.country !== 'United States') {
            console.log(data.location.country)
          } else {
            let context = getContext(data)
            createCityHTML(context)
            createDetailHTML(context)
          }
        })
      } else {
        input.css({
          borderColor: 'red'
        })
      }
    }
  )

});
