$(function () {
  // passing data to event
  $('#btn-click').click({
    name: 'Lech',
    domain: 'krzem.dev'
  }, function (event) {
    greetUser(event.data)
  })

  function greetUser(userdata) {
    let name = userdata.name || 'anonnymous';
    let domain = userdata.domain || example.com;

    alert(`Welcome ${name} from ${domain}!`)
  }
})