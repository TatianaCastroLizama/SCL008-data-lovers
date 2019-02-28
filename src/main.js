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
  result.forEach(element => {
    container.innerHTML += `<p>${element.title}</p>
    <img class="image" src="${element.image}" alt="${element.title}">`
  })
});



window.onload = showData(data);



