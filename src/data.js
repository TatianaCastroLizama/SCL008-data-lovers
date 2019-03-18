/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const filterData = (data, condition) => {
  let filterFeedLabel = data.filter(element => {
    return element.feedlabel.includes(condition) === true;

  })
  return filterFeedLabel;
};
const orderTitle = (data) =>{
for (let i=0; i<data.length; i++){
  return data[i].title 
}
let titles = []

for (let i=0; i<data.length; i++){
  titles.push(data[i].title)
}
titles.sort
}
const titles =  title.sort((a,b) =>{
  return a.localecompare (b);
})
return orderTitle;


//const sortData = (data, condition) => {

  //let sorted = [];

 // if (condition === 'az') {
 //   sorted = data.sort(sortByTitle);
 // }
 // if (condition === 'za') {
 //   sorted = data.sort(sortByTitle).reverse();
 // }
//  if (condition === 'idasc') {
//    sorted = data.sort(sortById);
//  }
//  if (condition === 'iddesc') {
//    sorted = data.sort(sortById).reverse();
//  }

//  return sorted.Object.values;
//};

//window.sortData = sortData;


// logica para ordenar por nombre
//function sortByName(a, b) {
//  if (a.name < b.name)
//    return -1;
//  if (a.name > b.name)
//    return 1;
  
//}

// logica para ordenar por Id
//function sortById(a, b) {
//  if (a.id < b.id)
//    return -1;
//  if (a.id > b.id)
//    return 1;

//}
//const sortData = (data, sortBy, sortOrder) => {
// let ordertitle = data.sort((a, b) => {
// return a[sortBy].localeCompare(b[sortBy]);
//})
//if (sortOrder === "ordenarZa") {
// ordertitle.reverse();
//}
//return ordertitle
//}

//window.sortData = sortData;

//window.filterData = filterData;





