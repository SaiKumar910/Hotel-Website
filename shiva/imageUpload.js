let uploadForm = document.querySelector('#upload-form');
uploadForm.addEventListener('submit' , function(){
   let imageFile = document.querySelector('#custom-file').files[0];
   let imageName = imageFile.name;
   
   let reader = new FileReader();
   reader.readAsDataURL(imageFile);

   reader.addEventListener('load', function() {
       if(this.result && localStorage){
           let imagesList = localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) : [] ;
           imagesList.push(this.result);
           localStorage.setItem('images' , JSON.stringify(imagesList));

       }
   });
   displayImage();
});

//Display Image
let displayImage = () => {
    let imagesList = localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) : [] ;
    if(imagesList.lenght !== 0){
        let cardImage = '';
        for(let image of imagesList){
            cardImage += `<div class="col-md-3 mt-3">
            <div class="card card-img">
                <img src="${image}" alt="" class="img-fluid img-size">
                <div class="card-body">
                    <h3 class="card-title">Image</h3>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore blanditiis vel, quis maiores voluptatum doloremque?</p>
                </div>
            </div>
        </div>` 
        }
        document.querySelector('#card-row').innerHTML = cardImage;
    };
};
displayImage();

//Remove Button
let removeBtn = document.querySelector('#remove-btn');
removeBtn.addEventListener('click' , function() {
    localStorage.removeItem('images');
    displayImage();
});