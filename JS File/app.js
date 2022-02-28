// search and fetch all phones
const loadGadget=()=>{
    const searchText=document.getElementById('user-input').value;

    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    fetch(url)
    .then(res=>res.json())
    .then(data=>displayPhone(data.data))
    
}
// display phones 
const displayPhone=(phones)=>{
    const container=document.getElementById('container');
    const first20Data=phones.slice(0,20)
    for(const phone of first20Data){
        const div=document.createElement('div')
        
        div.className="col-md-4 col-12"
        div.innerHTML=`
         
             <div class="card m-2 rounded-3" style="width: 18rem;">
                 <img src="${phone.image}" class="card-img-top img-fluid p-3 rounded" alt="...">
                 <div class="card-body">
                     <h5 class="card-title">${phone.phone_name}</h5>
                     <h6 class="card-title">${phone.brand}</h6>
                     <p class="card-text">Some quick example text to build .</p>
                     <button onclick="phoneDetails('${phone.slug}')" class="btn btn-primary">Go somewhere</button>
                 </div>
             </div>
         
         `
         container.appendChild(div)
    }
}
// fetch phone details
const phoneDetails=(details)=>{
    const url=`https://openapi.programming-hero.com/api/phone/${details}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayDetails(data.data))
}
// display phone details
const displayDetails=(d)=>{
    console.log(d)
    const modal=document.getElementById('modal')
    
        const div=document.createElement('div')
        div.innerHTML=`
        
       
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header text-center">
              <img src="${d.image}" alt="">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h5 class="card-title">${d.name}</h5>
                <p>${d.releaseDate}</p>
                <p>${d.mainFeatures.memory}</p>
                <p>${d.mainFeatures.chipSet}</p>
                <p>${d.mainFeatures.displaySize}</p>
                <p>sensors</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
     
        
        `
        
    modal.appendChild(div)

    
}