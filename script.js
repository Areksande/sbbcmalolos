document.querySelectorAll('.slider-nav a').forEach((dot, index) => {
    dot.addEventListener('click', e => {
      e.preventDefault(); // stop page from jumping
      const slider = document.querySelector('.slider');
      slider.scrollLeft = slider.offsetWidth * index; // scroll to slide
    });
  });

var videoElement = document.getElementById('vid1')
videoElement.volume = 0.5;



//Getting Bible API//
function getVerse() {
    const verse = document.getElementById("verse").value;

    fetch(`https://bible-api.com/${verse}?translation=kjv`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("result").innerHTML = `
                <p><strong>${data.reference}</strong> <em>${data.translation_name}</em></p> 
                <p>${data.text}</p>
                
            `;
        })
        .catch(error => {
            document.getElementById("result").innerHTML = "Verse not found.";
            console.error(error);
        });
}
