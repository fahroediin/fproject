$("#tombol-cari").on("click", function () {
  $("#list-film").html("");
  $.ajax({
    url: "http://omdbapi.com",
    type: "get",
    dataType: "json",
    data: {
      apikey: "aa14c69b",
      s: $("#search-film").val(),
    },
    success: function (result) {
      if (result.Response == "True") {
        let films = result.Search;

        $.each(films, function (i, data) {
          $("#list-film").append(
            `
          <div class="col-md-4">
          <div class="card-mb-3">
             <img src="` +
              data.Poster +
              `" class="card-img-top" alt="...">
              <div class="card-body">
               <h5 class="card-title">` +
              data.Tittle +
              `</h5>
              <h6 class="card-subtitle mb-2 text-muted">` +
              data.Year +
              `</h6>
           </div>
          </div>
          `
          );
        });

        $("#search-film").val("");
      } else {
        $("#list-film").html(
          `
        <div class="col">
        <h1 class="text-center">` +
            result.Error +
            `</h1>
        </div>`
        );
      }
    },
  });
});

function getDataIndonesia() {
  fetch("https://indonesia-covid-19.mathdro.id/api")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let positif = data.jumlahKasus;
      let sembuh = data.sembuh;
      let meninggal = data.meninggal;

      document.getElementById("data-positif").innerHTML = positif;
      document.getElementById("data-sembuh").innerHTML = sembuh;
      document.getElementById("data-meninggal").innerHTML = meninggal;
    })
    .catch((err) => {
      console.log(err);
    });
}
