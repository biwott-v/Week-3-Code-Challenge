document.addEventListener("DOMContentLoaded",(event)=>{
  function change(x,data){
    let movieImage=document.querySelector("#image");
    movieImage.src=data.films[x].poster;
    let movieTitle=document.querySelector("#title");
    movieTitle.textcontent=data.films[x].title 
    let movieRuntime=document.querySelector("#minruntime");
    movieRuntime.textContent=data.films[x].runtime;
    let movieDescription =document.querySelector("#description");
    movieDescription.textContent=data.films[x].description;
    let movieTime = document.querySelector("#time");
    movieTime.textContent = `${data.films[x].showtime} : ${data.films[x].ticketsold}`;
  }
  movieList=document.querySelector("#movielist");
  fetch("db.json")
  .then(req=>req.json())
  .then((data)=>{
    for(let i=0; i<data.length;i++){
      let newMovie=createElement("li");
      newMovie.textContent=data.films[i].title;
      newMovie.setAttribute("id",i);
      movieList.appendChild(newMovie);
      newMovie.addEventListener("click",change(i,data));
    }
  }) 

})

