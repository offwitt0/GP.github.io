document.getElementById('message2').addEventListener('click', function() {
    
    var message = document.getElementById('white2').value.trim();
    if (message !== '') {
        var smile2 = document.querySelector('.smile2');
        var newMessage = document.createElement('div');
        newMessage.textContent = message;
        newMessage.classList.add('message');
        smile2.appendChild(newMessage);
        document.getElementById('white2').value = '';
        smile2.scrollTop = smile2.scrollHeight; // التمرير لأسفل
    }
});
/////////////////////////////
let mediaRecorder;
let chunks = [];

navigator.mediaDevices.getUserMedia({ audio: true })
  .then(function (stream) {
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = function (e) {
      chunks.push(e.data);
    };

    mediaRecorder.onstop = function (e) {
      let blob = new Blob(chunks, { 'type': 'audio/ogg; codecs=opus' });
      chunks = [];
      let audioURL = URL.createObjectURL(blob);
      // تحديث الرسالة في halfchat2
      let message = document.createElement('div');
      message.textContent = 'Voice message';
      let audioElement = document.createElement('audio');
      audioElement.src = audioURL;
      audioElement.controls = true;
      message.appendChild(audioElement);
      document.querySelector('.messages-container').insertBefore(message, document.querySelector('.smile2'));
    };

    let message5 = document.getElementById('message5');
    message5.addEventListener('mousedown', function () {
      mediaRecorder.start();
      message5.textContent = 'Recording...';
    });

    message5.addEventListener('mouseup', function () {
      mediaRecorder.stop();
      message5.textContent = 'Record';
    });

  })
  .catch(function (err) {
    console.log('The following error occurred: ' + err);
  });
  ///////////////////////////////////////
  document.addEventListener('DOMContentLoaded', function () {
    let khanElements = document.querySelectorAll('.khan');
    khanElements.forEach(function (khanElement) {
        khanElement.addEventListener('click', function () {
            let khan1Element = document.querySelector('.khan1');
            let image = khanElement.querySelector('img').cloneNode(true);
            let name = khanElement.querySelector('.nmj1').cloneNode(true);
            khan1Element.innerHTML = '';
            khan1Element.appendChild(image);
            khan1Element.appendChild(name);
        });
    });
});
///////////////////////////////
