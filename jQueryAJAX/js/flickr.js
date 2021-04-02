$(function() {
    // $.getJSON()

    let flickrApiUrl = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"

    $.getJSON(flickrApiUrl, {
        tags: "warhammer, miniatures",
        tagmode: "all",
        format: "json"
    }).done( function(data) {
        $.each(data.items, function(index, item){
            $("<img>").attr("src", item.media.m).addClass("warhammer").appendTo(".codebox2");
            if (index === 8) {return false}
        })
    }).fail(function() {
        alert("The connection to Flickr has failed")
    })

});