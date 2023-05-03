import { useState, useEffect } from "react";

// Cave da api e url da api
const moviesURL = import.meta.env.VITE_API; 
const apiKey = import.meta.env.VITE_API_KEY; 


const Home = () => {
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {

        const res = await fetch(url)
        const data = await res.json();

        console.log(data)
    }

    return <div>Home</div>;
};

export default Home;