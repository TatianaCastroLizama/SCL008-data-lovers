const data = window.STEAM.appnews.newsitems;
const container = document.getElementById("root");

const showData = (data) => {
  
  // nombre y foto
  data.forEach(element => {
    // data[i]
    container.innerHTML += `<p>${element.title}</p>`
  })
}

// const showData = (data) => {
//   for (let i = 0; i < data.length; i++) {
//     container.innerHTML += `<p>${data[i].name}</p>
//                             <img class="image" src="${data[i].image}" alt="${data[i].name}">`
//   }
// }

document.getElementById('feedlabel').addEventListener('change', () => {
  let condition = document.getElementById('feedlabel').value;
  let result = window.filterData(data, condition);

  container.innerHTML = '';
  //result.forEach(element => {
    for (let i=0; i<result.length; i++){
    container.innerHTML += `<p>
    <a href="${data[i].url} target:"_blank"">${result[i].title}</a></p>`

  }
  
});



window.onload = showData(data);






window.onload = showData(data);




