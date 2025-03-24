document.addEventListener("DOMContentLoaded",(event)=>{
  function change(x,data){
    let movieImage=document.querySelector("#image");
    movieImage.src=data.films[x].poster;
    let movieTitle=document.querySelector("#title");
    movieTitle.textContent=data.films[x].title 
    let movieRuntime=document.querySelector("#minruntime");
    movieRuntime.textContent=data.films[x].runtime;
    movieRuntime.style.color="blue";
    let movieDescription =document.querySelector("#description");
    movieDescription.textContent=data.films[x].description;
    let movieTime = document.querySelector("#time");
    movieTickets =document.querySelector("#tickets");
    movieTime.textContent = `${data.films[x].showtime} : `;
    movieTickets.textContent=`${data.films[x].capacity-data.films[x].tickets_sold} tickets remaining`;
    tickets=data.films[x].capacity-data.films[x].tickets_sold;
    movieTickets.style.display="inline"
    movieTime.style.display="inline";
    let landTitle = document.querySelector("#land");
    landTitle.remove();
  }
  let tickets;
  let button=document.querySelector("#btn");
  let movieList=document.querySelector("#films");
  fetch("db.json")
  .then(req=>req.json())
  .then((data)=>{
    console.log(data.length);
    console.log(data)
    for(let i=0; i<15;i++){
      let breakLine=document.createElement("br")
      let horizontalRule=document.createElement("hr")
      let newMovie=document.createElement("li");
      newMovie.textContent=data.films[i].title;
      movieList.appendChild(newMovie);
      newbtn=document.createElement("button");
      newMovie.appendChild(newbtn);
      newbtn.textContent="DELETE";
      newbtn.style.margin="3px";
      newbtn.style.display="inline";
      newbtn.addEventListener("click",(event)=>{
        newMovie.remove();
        horizontalRule.remove();
        breakLine.remove();
      })
      movieList.appendChild(horizontalRule);  
      movieList.appendChild(breakLine);
      //newMovie.addEventListener("click",change(i++,data));
    }
    change(0,data);
    button.addEventListener("click",()=>{
      if(tickets>0){
        value=tickets--;
       let movieTickets = document.querySelector("#tickets");
       movieTickets.textContent=`${tickets} tickets remaining`;
      }
      else{
        button.textContent="Sold Out";
      }
    })
  }) 

})


