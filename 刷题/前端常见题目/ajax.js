function ajax(url,params) {
  let xhr = new XMLHttpRequest();
  xhr.open('get',url + params);
  xhr.onreadystatechange = function () {
    if (this.readyState != 4) return;
    if (this.status === 200) {
      
    }
  }

  xhr.send();
}
