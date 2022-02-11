$('#form').on("submit", function () {
    const coordinates = $('#coordinates').val()
    const data = { 'lat': coordinates.split(', ')[0], 'lon': coordinates.split(', ')[1], 'coordinates': coordinates }
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/api/v1/nasa/',
        contentType: 'application/json',
        data: JSON.stringify(data)
    }).done(function (data) {
        for (let index = 0; index < data.shots.length; index++) {
            $(`#img${index + 1}`).attr("src", data.shots[index]);
        }
        // $(`#img9`).attr("src", data.shot);
    }).fail(function (err) {
        alert(err)
    })
    return false;
})