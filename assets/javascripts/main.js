$(document).ready(function() {

  $.get('https://pnpcptp8xh9k.statuspage.io/api/v2/status.json').then(function(response) {
    if(response.status && response.status.indicator) {
      $('.status-circle').addClass(response.status.indicator);
    }
  });


  $('#toggle-menu').on('click', function() {

    $('#sidebar').toggleClass('is-open');
    $('.wrapper').toggleClass('is-fixed')
    if ($('#sidebar').hasClass('is-open')) {
      $(this).text('Close');
    } else {
      $(this).text('Menu');
    }

  });


  var sectionStorageId = 'travis-docs-nav';
  var storageContent = window.localStorage.getItem(sectionStorageId);
  var linkStorageId = 'travis-docs-current';
  var linkStorageContent = window.localStorage.getItem(linkStorageId);
  $('.sidebar-navigation').addClass('has-js');

  if (storageContent) {
    $('.sidebar-navigation h2:contains('+ storageContent +')').next('ul').addClass('is-open');
  } else if ($('.sidebar-navigation ul.is-open').length < 1) {
    $('.sidebar-navigation ul:first-of-type').addClass('is-open');
  }

  if (linkStorageContent) {
    $('.sidebar-navigation a:contains('+ linkStorageContent +')').addClass('is-active');
  }

  $('.sidebar-navigation nav h2').click(function(ev) {
    window.localStorage.setItem(sectionStorageId, $(ev.target).text());
    $('.sidebar-navigation .is-open').removeClass('is-open');
    $(this).next('ul').addClass('is-open');
  });

  $('.sidebar-navigation a').click(function(ev) {
    window.localStorage.setItem(linkStorageId, $(ev.target).text());
    $('.sidebar-navigation a.is-active').removeClass('is-active');
    $(this).addClass('is-active');
  });

});
