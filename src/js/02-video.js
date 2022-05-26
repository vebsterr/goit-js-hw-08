import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const videoPlayer = new Vimeo.Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

videoPlayer.on('timeupdate', throttle(onTimeUpdating, 1000));

function onTimeUpdating(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
}

videoPlayer.setCurrentTime(Number(localStorage.getItem(STORAGE_KEY)));
