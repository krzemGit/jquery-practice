$(function () {
  const pokeUrl = 'https://pokeapiii.co/api/v2/generation/1?limit=10'

  $.getJSON(pokeUrl)
    .done(function (data) {
      console.log(data.pokemon_species);

      // data manipulation - USEFULL!!
      $.each(data.pokemon_species, function (index, pokemon) {
        let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        let para = $('<p>').html(`Pokemon no. ${index + 1} is ${name}`)
        para.appendTo('#poke')
      })
    })
    .fail(function (response, error) {
      console.log('Failed to fetch pokemons', response, error);
      // this will empty the text content of the paragraph
      $('#poke').empty()
    }).always(function () {
      // executed always at the end
      console.log('Fetching done for now...')
    })
})