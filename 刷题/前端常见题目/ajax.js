function ajax(url,params) {
  return new Promise((resolve,reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('get',url + params);
    xhr.onreadystatechange = function () {
      if (this.readyState != 4) return;
      if (this.status === 200) {
        resolve(xhr.responseText);
      }else {
        reject(new Error(xhr.statusText));
      }
    }
  
    xhr.send();
  })
}
