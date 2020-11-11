
// creates an array of objects where key:value pairs in each object are the details of a car and returns that array
 function createCar() {
   const cars = [
     { make: "chevy", country: "american", img: "images/car-american-1.jpeg", special: true, model: 'american', price: "$10000 ", type: 'sedan', trans: "automatic", gas: 50 },
     { make: "mercedes", country: "german", img: "images/Mercedes.jpg", special: true, model: 'german', price: "$30000 ", type: 'mercedes', trans: "automatic", gas: 80 },
     { make: "bmw", country: "german", img: "images/BMW.jpg", special: true, model: 'german', price: "$60000 ", type: 'BMW', trans: "automatic", gas: 80 },

     { make: "Jeep", country: "german", img: "images/Jeep.jpg", special: true, model: 'german', price: "$40000 ", type: 'Jeep', trans: "automatic", gas: 60 },
     { make: "Range-rover", country: "german", img: "images/Range-rover.jpg", special: true, model: 'german', price: "$90000 ", type: 'Range-rover', trans: "automatic", gas: 70 },
     { make: "Toyota", country: "american", img: "images/Toyota.jpg", special: true, model: 'american', price: "$30000 ", type: 'Toyota', trans: "automatic", gas: 50 },
     { make: "chevy", country: "american", img: "images/car-american-2.jpeg", special: false, model: 'american', price: "$20000 ", type: 'Toyota', trans: "automatic", gas: 50 },
     { make: "chevy", country: "american", img: "images/car-american-3.jpeg", special: false, model: 'american', price: "$15000 ", type: 'Toyota', trans: "automatic", gas: 60 },
     { make: "chevy", country: "american", img: "images/car-american-4.jpeg", special: false, model: 'american', price: "$90000 ", type: 'Toyota', trans: "automatic", gas: 60 }
   ];
    
   return cars;
 }
 
window.onload=function(){
 
  document.querySelector('.american').addEventListener('click',displayAmerican);
  document.querySelector('.german').addEventListener('click',displayGerman);
  displayAll();
  document.querySelector('.all').addEventListener('click',displayAll);
  featuredCar();
  

}

// creates an array of american cars from cars array and will be called when american button is clicked in inventory section.
function displayAmerican(){
  let car=createCar();
  const americanCars = car.filter(item => item.country=='american');
  displayContent(americanCars);
}
// creates an array of german cars from cars array and will be called when american button is clicked in inventory section.
function displayGerman(){
  let car = createCar();
  const germanCars = car.filter(car => car.country=='german');
  displayContent(germanCars);
}
//will be called when all button is clicked and displays all the cars in car array
function displayAll(){
  let car = createCar();
  displayContent(car);
}
//dynamically writes the html in to inventory section to display only american car and will be called in displayAmerican function
function displayContent(americanCars){
  let data="";
  const inventory = document.querySelector('.inventory-container');
  inventory.innerHTML="";
  americanCars.forEach(element => {  
    data += 
  `<div class="col-10 mx-auto my-3 col-md-6 col-lg-4">
  <div class="card car-card">
      <img src="${element.img}" alt="" class="card-img-top">
      <div class="card-body d-flex justify-content-between p-3 text-uppercase">
          <div>
              <strong >${element.make}</strong>
              <h6>${element.model}</h6>
          </div>
          <h3 class="bg">${element.price}</h3>
      </div>
      <div class="card-footer text-capitalize d-flex justify-content-between">
          <p><span><i class="fas fa-car"></i></span>${element.make}</p>
          <p><span><i class="fas fa-cogs"></i></span>${element.trans}</p>
          <p><span><i class="fas fa-gas-pump"></i></span>${element.gas}</p>
      </div>

  </div>
</div> `
});
inventory.innerHTML=data;
}
//dynamically writes the html in to feature section to display only special cars and will be called when the window loads
function featuredCar() {
    let car = createCar();
    const featuredCars = car.filter(item => item.special == true);
    console.log(featuredCars);
    displayfeaturedCar(featuredCars);
    
}

function displayfeaturedCar(featuredCars){
      const info=document.querySelector('.featured-info');
      info.innerHTML="";
      let data='';
      featuredCars.forEach(item =>{
          data += ` <div class="featured-item my-3 p-2 d-flex align-items-baseline text-capitalize flex-wrap">
          <span class="featured-icon mr-2"><i class="fas fa-car"></i></span>
          <h5 class="mx-1 font-weight-bold">${item.make}</h5>
          <h6 class="mx-2 " >${item.price}</h6>
      </div>  `
     })
      info.innerHTML = data;
}


    

