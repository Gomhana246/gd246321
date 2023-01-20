"<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js'>"+"</script>";
"<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css' rel='stylesheet'>"
    "<link href='https://getbootstrap.com/docs/5.3/assets/css/docs.css' rel='stylesheet'>"+"</link>"
let filterArray =[];
const galleryArray=[
    {
        id:1,
        name:"Test 01",
        src:"./img/p1.jpg",
        releaseDate:"2022",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, omnis commodi aliquid sapiente ab earum harum illo tempora ipsa. Tempora porro aspernatur aperiam in harum!"
    },
    {
        id:2,
        name:"Test 02",
        src:"./img/p1.jpg",
        releaseDate:"2021",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, omnis commodi aliquid sapiente ab earum harum illo tempora ipsa. Tempora porro aspernatur aperiam in harum!"
    },
    {
        id:3,
        name:"Test 03",
        src:"./img/p1.jpg",
        releaseDate:"2023",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, omnis commodi aliquid sapiente ab earum harum illo tempora ipsa. Tempora porro aspernatur aperiam in harum!"
    },
    {
        id:4,
        name:"Test 04",
        src:"./img/p1.jpg",
        releaseDate:"2023",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, omnis commodi aliquid sapiente ab earum harum illo tempora ipsa. Tempora porro aspernatur aperiam in harum!"
    }, 
    {
        id:5,
        name:"Test 05",
        src:"./img/p1.jpg",
        releaseDate:"2023",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, omnis commodi aliquid sapiente ab earum harum illo tempora ipsa. Tempora porro aspernatur aperiam in harum!"
    }, 
    {
        id:6,
        name:"Test 06",
        src:"./img/p1.jpg",
        releaseDate:"2023",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, omnis commodi aliquid sapiente ab earum harum illo tempora ipsa. Tempora porro aspernatur aperiam in harum!"
    },


    ];





function showGallery(showPost){
    const divElement=document.getElementById('card');
    for(var i=0; i<showPost.length; i++){
        divElement.innerHTML +=
          
            "<div class='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 text-center'>"+ 
            "<p class='lead text-center'>"+showPost[i].name+"</p>"+
            "<img src='"+showPost[i].src+ "'class='mx-auto d-block img-fluid'/>"+
            "<p class='text-center'>"+showPost[i].desc+"</p>"+ 
            "<h6 class=' '>"+"Release Date : "+showPost[i].releaseDate+"</h6>"+
           // "<button type='button' class='btn btn-outline-info '>"+"More..."+"</button>"+
            
            "<hr class='mb-4'>"+"</div>";
        
    }
}
showGallery(galleryArray);


