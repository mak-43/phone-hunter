// search and fetch all phones
let count=0
const cartStore=[]
const loadGadget=()=>{
    document.getElementById('modal').innerHTML=""
    document.getElementById('spinner').style.display='block'
    
    const input=document.getElementById('user-input').value;
    const searchText=input.toLowerCase()  
    if(searchText.length==0){
        document.getElementById('spinner').style.display='none'
        alert("Please write a phone's name")  
    }
    else{
        const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`;  
        fetch(url)
        .then(res=>res.json())   
        .then(data=>displayPhone(data.data))    
    }   
}
// display phones 
const displayPhone=(phones)=>{
    document.getElementById('user-input').value=''
    document.getElementById('spinner').style.display='none'
    if(phones.length==0){
        alert("Not Found")
    } 

    const container=document.getElementById('container');
    container.textContent=''
    
    const result=document.getElementById('result')
    const seeMore=document.getElementById('see-more')
    
    if(phones.length>20){
        
        const r=phones.length-20
        result.innerText=`There are ${r}  more results found`
        result.style.display='block'
        seeMore.style.display='block'


    }
   
    phones.slice(0,20).forEach(phone=>{
        const div=document.createElement('div')
    
        div.className="col-lg-4 col-md-6 col-12"
        div.innerHTML=`
         
             <div class="card shadow p-2 mb-5 bg-body rounded-3" style="width: 18rem;">
                 <img src="${phone.image}" class="card-img-top shadow-sm p-3 mb-5 bg-body rounded img" alt="...">
                 <div class="card-body">
                     <h5 class="card-title">${phone.phone_name}</h5>
                     <h6 class="card-title">${phone.brand}</h6>
                     
                     <button onclick="phoneDetails('${phone.slug}')" class="btn btn-primary my-2">Details</button>
                 </div>
             </div>
         
         `
         container.appendChild(div)
    })

   
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
        modal.textContent=''
        const div=document.createElement('div')
        
        div.innerHTML=""    
        div.innerHTML=`          
            <div class="modal-dialog">
                <div class="modal-content shadow p-2  mb-5 bg-body rounded-3">
                    <div class="modal-header text-center mx-auto">
                        <img class="img" src="${d.image}" alt="">
                    </div>
                    <div class="modal-body">
                        <h5 class="card-title">${d.name}</h5>
                        <p><span class="fw-bold">Released Date: </span>${d.releaseDate?d.releaseDate:"Has not been released yet"}</p>
                        <h5 class="text-danger">Main Features</h5>
                        <hr>
                        <p><span class="fw-bold">Storage: </span> ${d.mainFeatures.storage}</p>
                        <p><span class="fw-bold">Chipset: </span> ${d.mainFeatures?.chipSet?d.mainFeatures.chipSet:"Not found"}</p>
                        <p><span class="fw-bold">Display Size: </span> ${d.mainFeatures.displaySize}</p>
                        
                        <p><span class="fw-bold">Sensors: </span> ${d.mainFeatures?.sensors?d.mainFeatures.sensors:"No Sensor"} </p>
                        <h5 class="text-danger">Others:</h5>
                        <hr>
                        <p>WALN:${d.others?.WLAN?d.others.WLAN:'No WALN'}</p>
                        <p>Bluetooth:${d.others?.Bluetooth?d.others.Bluetooth:'No Bluetooth'}</p
                        <p>GPS:${d.others?.GPS?d.others.GPS:'No GPS'}</p>
                        <p>NFC:${d.others?.NFC?d.others.NFC:'No NFC'}</p>
                        <p>Radio:${d.others?.Radio?d.others.Radio:'No Radio'}</p>
                        <p>USB:${d.others?.USB?d.others.USB:'No USB'}</p>
                        
                    </div>
                    <div class="modal-footer mx-auto">
                        <button onclick="close()" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onclick="save('${d.name}')">Add to Cart</button>
                    </div>
                </div>
            </div>  
       `  
      
    modal.appendChild(div) 
    
}
const save=(c)=>{
    count++
    cartStore.push(c)
    console.log(cartStore)
}

const cart=()=>{
    console.log(arr)
    console.log(count)
}




