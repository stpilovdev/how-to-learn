const videos = document.querySelectorAll('.video__element');
videos.forEach((video) => {
  video.setAttribute('controlsList', 'nodownload');
});

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}
