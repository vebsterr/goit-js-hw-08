// import '@vimeo/player';
// import Vimeo from '@vimeo/player';
// import 'lodash.throttle';
// import throttle from 'lodash.throttle';

// const video = document.querySelector('#vimeo-player');

// const videoPlayer = new Vimeo.Player(video);

// videoPlayer.on('timeupdate', throttle(onTimeUpdating, 1000));
// videoPlayer.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

// function onTimeUpdating(data) {
//   localStorage.setItem('videoplayer-current-time', data.seconds);
// }

import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const videoPlayer = new Vimeo.Player(iframe);

videoPlayer.on('timeupdate', throttle(onTimeUpdating, 1000));

function onTimeUpdating(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

videoPlayer
  .setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log('Error!!!');
        break;

      default:
        console.log('Other error');
        break;
    }
  });
