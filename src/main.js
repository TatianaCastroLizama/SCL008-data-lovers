const data = window.STEAM.appnews.newsitems;
const container = document.getElementById("root");

const showData = (data) => {
    // nombre y foto
  data.forEach(element => {
    //data[i]
    container.innerHTML += `<p>${element.feedlabel}</p>`
  })
}

//const showData = (data) => {
//for (let i = 0; i < data.length; i++) {
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
    <a href="${data[i].url} "target:"_blank">${result[i].title}</a></p>`

    

  }
})


//const titleOrder = document.getElementById("titleone");
//const containerOrder = document.getElementById("roottwo");
//const 

//titleOrder.addEventListener('change', () => {
  //let option = titleOrder.value;
  //let ordering = window.sortData(data, 'name', option); 
  //titleOrder.innerHTML = '';
   //ordering.forEach(element => { 
   // titleOrder.innerHTML += `
     //  <div class="col-sm-12	col-md-4	col-lg-4	col-xl-4">
    //<div class="card">
      //<div class="card-body">
        //<h5 class="card-title">${element.name}</h5>

       // <img class="image" src="${element.splash}" alt=""class="img-thumbnail">
      //</div>
   // </div>`
       
  // })
  //})






window.onload = showData(data);

