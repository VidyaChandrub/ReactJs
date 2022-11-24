import react from 'react'
class Movie extends React.Component {
movie_name = "kanthara";
movie_type = ['2D','3D'];
more_Details = {
    dir_name:"Rakshith Shetty",
    languages:['kannada','telugu','tamil','hindi']
}

render(){
    return <div>                                   //Empty fragment
            <h1>{this.movie_name}</h1>
            <h2>{this.movie_type[1]}</h2>
            {/* <h2>{this.more_Details.more_Details}</h2>
            <h2>{this.more_Details.languages[3]}</h2> */}

            </div>
}



}
export default Movie