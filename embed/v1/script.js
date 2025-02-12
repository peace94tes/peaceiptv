
document.addEventListener("DOMContentLoaded", () => {
const video = document.querySelector("#my-player");
if (video.canPlayType("application/vnd.apple.mpegurl")) {
  video.src = "https://peace94tes.github.io/peaceiptv/web/" + sURL;
} else if (Hls.isSupported()) {
  const hls = new Hls({
    maxBufferSize: 1 * 1000,
  });
  var source = video.src;
  hls.loadSource(source);
  hls.attachMedia(video);
} else {
  console.error(
    "This is a legacy browser that doesn't support Media Source Extensions"
  );
}
});
