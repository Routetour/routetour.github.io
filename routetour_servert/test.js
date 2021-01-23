const xhr = new XMLHttpRequest()

xhr.open('GET', 'https://routetour.github.io/routetour_servert/har.json', true);
xhr.onload = function(){
    alert(`Received: ${xhr.status} ${xhr.response}`);
};

xhr.onerror = function(){
    alert(`Network Error`);
};

xhr.send('testing')