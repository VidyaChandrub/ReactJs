import React from 'react'
class Movie extends React.Component {
movie_Name = "kanthara";
movie_Type = ['2D','3D'];
more_Details = {
    dir_name:"Rakshith Shetty",
    languages:['kannada','telugu','tamil','hindi']
}


render(){
    return <>                               
            <h1>{this.movie_Name}</h1>
            <h2>{this.movie_Type[1]}</h2>
            <h2>{this.more_Details.dir_name}</h2>
            <ul>
            <li>{this.more_Details.languages[0]}</li>
            <li>{this.more_Details.languages[1]}</li>
            <li>{this.more_Details.languages[2]}</li>
            <li>{this.more_Details.languages[3]}</li>
            </ul>
           
            <button className = "btn btn-danger">KANTHARA</button>  
            </>         
}
}
export default Movie