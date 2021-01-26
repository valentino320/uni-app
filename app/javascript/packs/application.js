// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import "materialize-css/dist/js/materialize"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "jquery"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

// $( document ).load('turbolinks:load', function() {
//   $(".dropdown-trigger").dropdown();
//   alert('hey!');
// } );

$(document).on('turbolinks:load', function() {
  $(".dropdown-trigger").dropdown();
  $('.sidenav').sidenav();
  $('#fade-out-target').fadeOut(4000);
})