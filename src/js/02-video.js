import '@vimeo/player';
import Vimeo from '@vimeo/player';
import 'lodash.throttle';
import throttle from 'lodash.throttle';

const video = document.querySelector('#vimeo-player');

const videoPlayer = new Vimeo.Player(video);

videoPlayer.on('timeupdate', throttle(onTimeUpdating, 1000));
videoPlayer.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

function onTimeUpdating(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
