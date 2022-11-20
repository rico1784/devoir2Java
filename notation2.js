(function (){
    var formText = {
        init: function(){
            window.addEventListener('load', function () {
                const element = document.getElementById('link1');
                const button1 = document.getElementById('button1');
                const close = document.getElementById('close');

                element.addEventListener('click', function (event){
                    event.preventDefault();

                    var xmlhttp = new XMLHttpRequest();
                    xmlhttp.addEventListener('readystatechange', function(){
                        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
                            var div = document.getElementById('formText');
                            div.innerHTML = xmlhttp.responseText
                        }else {
                            console.debug(xmlhttp);
                        }
                    });
                    button1.style.display = "none";
                    close.style.display = "block";
                    xmlhttp.open('GET', element.href, true);
                    xmlhttp.send();


                    });

                });






            window.onload = function() {
                var b = document.getElementById('close');
                b.onclick = function() {

                    var e = document.getElementById('Search');
                    b.style.display = 'none';
                    e.style.display = 'none';
                    button1.style.display = "block";


                }
            }
        }
    };
    formText.init();
})();



