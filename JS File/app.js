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
         
             <div class="card shadow p-3 mb-5 bg-body rounded-3" style="width: 18rem;">
                 <img src="${phone.image}" class="card-img-top shadow-sm p-3 mb-5 bg-body rounded" alt="...">
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
    const modal=document.getElementById('modal')    
        const div=document.createElement('div')    
        div.innerHTML=`          
            <div class="modal-dialog">
                <div class="modal-content shadow p-3 mb-5 bg-body rounded-3">
                    <div class="modal-header text-center mx-auto">
                        <img src="${d.image}" alt="">
                    </div>
                    <div class="modal-body">
                        <h5 class="card-title">${d.name}</h5>
                        <p>${d.releaseDate}</p>
                        <p>Storage: ${d.mainFeatures.memory}</p>
                        <p>Chipset: ${d.mainFeatures.chipSet}</p>
                        <p>Displaysize: ${d.mainFeatures.displaySize}</p>
                        
                        <p>Sensors: ${d.mainFeatures.sensors}</p>
                        
                    </div>
                    <div class="modal-footer mx-auto">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>  
       `  
       
       
    modal.appendChild(div) 
}
