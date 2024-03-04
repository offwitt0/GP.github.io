document.querySelectorAll('.details-btn').forEach(item => {
    item.addEventListener('click', event => {
        const table = event.target.closest('.col-sm-6').querySelector('.details-table');
        if (table.style.display === 'none') {
            table.style.display = 'table';
        } else {
            table.style.display = 'none';
        }
    });
});
//////////////////////////
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  } 
  
  ////////////////////////////////////
  const chatBox = document.getElementById('chat');
const inputMessage = document.getElementById('white');
const sendMessageButton = document.getElementById('message');
const smileButton = document.querySelector('.face');
const clipButton = document.querySelector('.face2');

// إضافة الوظائف الخاصة بكل زر
sendMessageButton.addEventListener('click', function(event) {
    event.preventDefault();
    sendMessage();
});

inputMessage.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

smileButton.addEventListener('click', function() {
    alert('ابتسامة');
    smileButton.addEventListener('click', function() {
        inputMessage.value += ' :)';
    });
    // يمكنك هنا إضافة الكود الخاص بإضافة الابتسامة إلى الرسالة
});

clipButton.addEventListener('click', function() {
    alert('مرفق');
    // يمكنك هنا إضافة الكود الخاص بإضافة مرفق إلى الرسالة
});

// وظيفة إرسال الرسالة
function sendMessage() {
    const message = inputMessage.value.trim();
    if (message !== '') {
        alert('تم إرسال الرسالة: ' + message);
        function sendMessageToServer(message) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/send-message', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        console.log('تم إرسال الرسالة بنجاح');
                    } else {
                        console.error('حدث خطأ أثناء إرسال الرسالة');
                    }
                }
            };
            xhr.send(JSON.stringify({ message: message }));
        }
        
        // استخدام الدالة لإرسال الرسالة عند الضغط على زر الإرسال
        sendMessageButton.addEventListener('click', function(event) {
            event.preventDefault();
            var message = inputMessage.value.trim();
            if (message !== '') {
                sendMessageToServer(message);
                inputMessage.value = '';
            } else {
                alert('يرجى إدخال رسالة قبل الإرسال');
            }
        });
        // يمكنك هنا إضافة الكود الخاص بإرسال الرسالة إلى السيرفر
        inputMessage.value = '';
    } else {
        alert('يرجى إدخال رسالة قبل الإرسال');
    }
}
///////////////////////
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}