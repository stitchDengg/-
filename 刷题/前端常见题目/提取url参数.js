

let URL = 'https://www.bilibili.com/video/BV1Dt42147h4?p=5&vd_source=4e52892ecc0f01d60d5168fe7741ef6b';


function queryUrlParams(URL) {
  const url = URL.split('?')[1];
  if (url) {
    urlparms = new URLSearchParams(url);
    console.log(urlparms)
    return Object.fromEntries(urlparms.entries());
  } else {
    return {};
  }
}

console.log(queryUrlParams(URL))