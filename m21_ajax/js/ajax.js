$(function () {
  // $.load() - for script and html files
  $('#code').load('js/ajax.js');

  $('#code').load('idontexist.php', function (response, error) {
    if (error) {
      alert('Could not load file')
      console.log(error);
    } else {
      console.log(response);
    }

  })
})