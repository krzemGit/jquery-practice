$(function() {
    // $.getJSON()

    let SWApiUrl = "https://swapi.co/api/people/"

    $.getJSON(SWApiUrl).done(function(data) {
        console.log(data)
        $.each(data.results, function(index, item) {
            console.log(data.results[index].name)
            let heroNo = index + 1
            let hero = data.results[index].name
            let heroLink = 
            $("#SW-list").append(`<p>(${heroNo}) <span class="hero" ind=${index}>${hero}</p>`)});

        $(".hero").click(function() {
            $("div#SW-details").css("padding-top", "20px")
            // checking hero index
            let heroIndex = $(this).attr("ind");
            // downloaded charateristics
            let heroHeight = `<p>Heigth: ${data.results[heroIndex].height}</p>`;
            let heroMass = `<p>Mass: ${data.results[heroIndex].mass}</p>`;
            let heroHair = `<p>Hair: ${data.results[heroIndex].hair_color}</p>`;
            let heroSkin = `<p>Skin: ${data.results[heroIndex].skin_color}</p>`;
            let heroAlligence
            let smallIcon 
            // conditional characteristics
            let heroSpecies 
            if (/.*[0-9].*/.test(data.results[heroIndex].name)) {
                heroSpecies = "<p>Species: robot</p>";
            } else {
                heroSpecies =  "<p>Species: human</p>"; }
            if (data.results[heroIndex].name == "Darth Vader") {
                heroAlligence = "Empire"
                smallIcon = "<img src='./img/empire-icon-removebg-preview.png' class='small-icon'>"
            } else {
                heroAlligence = "Rebellion"
                smallIcon = "<img src='./img/rebel-alliance-icon-0-removebg-preview.png' class='small-icon'>"
            }
            $("#SW-details").empty().append(`${smallIcon} ${heroSpecies} ${heroHeight} ${heroMass} ${heroHair} ${heroSkin}  <strong>${heroAlligence}</strong>`)
        })
    }).fail(function() {
        console.log("something went wrong!")
    })




});