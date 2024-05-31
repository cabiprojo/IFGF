document.addEventListener('DOMContentLoaded', function() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxJCcH3wKiOTrzsMq8TsnyGy3oxKCNn6_3dvWN8whUKPGlXR0fS2_-A2443DbNsQzkX/exec'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {form.reset()})
        .catch(error => console.error('Error!', error.message))
    })

  var galleryEaster = document.getElementById("gallery-easter");
    var galleryXmas = document.getElementById("gallery-xmas");
    var galleryRetreat = document.getElementById("gallery-retreat");
    var galleryMonthly = document.getElementById("gallery-monthly");
    
    // Get the link elements
    var boxEaster = document.getElementById("box-easter");
    var boxXmas = document.getElementById("box-xmas");
    var boxRetreat = document.getElementById("box-retreat");
    var boxMonthly = document.getElementById("box-monthly");

    // Get the close button elements
    var galleryCloseBtnEaster = document.getElementById("gallery-close-btn-easter");
    var galleryCloseBtnXmas = document.getElementById("gallery-close-btn-xmas");
    var galleryCloseBtnRetreat = document.getElementById("gallery-close-btn-retreat");
    var galleryCloseBtnMonthly = document.getElementById("gallery-close-btn-monthly");

    boxEaster.addEventListener("click", function(event) {
      event.preventDefault();
      galleryEaster.style.display = "block";
  });

  galleryCloseBtnEaster.addEventListener("click", function() {
      galleryEaster.style.display = "none";
    });

    boxXmas.addEventListener("click", function(event) {
      event.preventDefault();
      galleryXmas.style.display = "block";
    });

    galleryCloseBtnXmas.addEventListener("click", function() {
        galleryXmas.style.display = "none";
      });

    boxRetreat.addEventListener("click", function(event) {
        event.preventDefault();
        galleryRetreat.style.display = "block";
    });

    galleryCloseBtnRetreat.addEventListener("click", function() {
      galleryRetreat.style.display = "none";
    });
    
    boxMonthly.addEventListener("click", function(event) {
        event.preventDefault();
        galleryMonthly.style.display = "block";
      });
      galleryCloseBtnMonthly.addEventListener("click", function() {
      galleryMonthly.style.display = "none";
      });
});
