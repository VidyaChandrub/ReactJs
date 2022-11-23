let Message = () => {
    let movie_Name = "Avatar";
    let movie_dir = "rajMouli"
    let movie_det = {
        actor : "prasanna",
        actress : "prasanna"
    }
    return <div>
        <h1> Hello </h1>
        <h2> {movie_Name} </h2>
        <h2> {movie_dir} </h2>
        <pre>{JSON.stringify(movie_det)}</pre>
        <h2> {movie_det.actor} </h2>
        <h2>{movie_det.actress}</h2>
    </div>
}
export default Message