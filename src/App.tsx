import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Row from './Row';
import PostDetail from './PostDetail';
import WritePage from './WritePage';

let preparedMovie = [
	{
		original_name: 'Chef',
		name: 'Chef',
		poster_path:
			'https://lh3.googleusercontent.com/proxy/t-uyLVyxMdk-ApRakZZ8uEd_gfTi8JoQiIEvYx4ElxeF1FzXBnp0nC_8EG-e8tKHcbhotAfoGrDLcNK9iu-sxYntS2czwq7epS3Ts8z7OQA50rGJlurQ-0ME4eqjL9wv5cYA9TPTH3zrZwEi47tzWOPyy2uQ1sjLWsstdZXDH83khNfSzV4',
	},
	{
		original_name: 'Coco',
		name: 'Coco',
		poster_path:
			'https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg',
	},
	{
		original_name: '범죄도시',
		name: '범죄도시',
		poster_path:
			'https://lh3.googleusercontent.com/proxy/sQ4gZrtGjoFI6eGU8e_XMR_5K5BxImQKfXeaD5m93hbLNn6EnxjzXqbfXLTZ9wSH32gjKhTGx8ed9BFlg_L2Pel9Z0Y',
	},
	{
		original_name: 'Eternal Sunshine',
		name: 'Eternal Sunshine',
		poster_path: 'https://miro.medium.com/max/3200/1*-liR3H_fmJemOp4qOUfpyA.jpeg',
	},
	{
		original_name: 'Fast & Furious 7',
		name: 'Fast & Furious 7',
		poster_path:
			'https://cdn.shopify.com/s/files/1/0969/9128/products/Fast_Furious_7_-_Paul_Walker_-_Vin_Diesel_-_Dwayne_Johnson_-_Hollywood_Action_Movie_Poster_dc9198b7-c29f-4725-910c-366cef8dc546.jpg?v=1582543223',
	},
	{
		original_name: 'Martian',
		name: 'Martian',
		poster_path: 'https://images-na.ssl-images-amazon.com/images/I/A1%2BFw58qbDL._AC_SL1500_.jpg',
	},
	{
		original_name: 'Midnight in Paris',
		name: 'Midnight in Paris',
		poster_path: 'https://m.media-amazon.com/images/M/MV5BMTM4NjY1MDQwMl5BMl5BanBnXkFtZTcwNTI3Njg3NA@@._V1_.jpg',
	},
	{
		original_name: 'Music and Lyrics',
		name: 'Music and Lyrics',
		poster_path:
			'https://www.pastposters.com/cw3/assets/product_full/R/music-and-lyrics-cinema-quad-movie-poster-(1).jpg',
	},
	{
		original_name: '기생충',
		name: '기생충',
		poster_path:
			'https://upload.wikimedia.org/wikipedia/ko/6/60/%EA%B8%B0%EC%83%9D%EC%B6%A9_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
	},
	{
		original_name: 'The Terminal',
		name: 'The Terminal',
		poster_path: 'https://images-na.ssl-images-amazon.com/images/I/91avFh9KUhL._SL1500_.jpg',
	},
	{
		original_name: 'Black Panther',
		name: 'Black Panther',
		poster_path: 'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg',
	},
	{
		original_name: '너의 결혼식',
		name: '너의 결혼식',
		poster_path: 'https://ojsfile.ohmynews.com/STD_IMG_FILE/2018/0826/IE002383442_STD.jpg',
	},
	{
		original_name: 'Begine Again',
		name: 'Begin Again',
		poster_path: 'https://www.movieviral.com/wp-content/uploads/2014/06/begin-again-poster.jpg',
	},
];

type Movie = { original_name: string; name: string; poster_path: string };

function App() {
	// 외부 url에서 사진 가져오려면 Row에 fetchUrl props 추가해서 넣어주면 됨
	let [movies, setMovies] = useState<Movie[]>(preparedMovie);

	let callBackFunction = (cbMoviesList: Movie[]) => {
		console.log(cbMoviesList);
		setMovies(cbMoviesList);
	};

	return (
		<div className="App">
			<Route exact path="/">
				<Link to="/write">
					<button>글쓰기</button>
				</Link>
				<Row title="NETFLIX ORIGINALS" rowMovies={movies} isLargeRow />
				<Row title="Trending Now" rowMovies={movies} />
				<Row title="Top Rated" rowMovies={movies} />
				<Row title="Korean" rowMovies={movies} />
				<Row title="Action" rowMovies={movies} />
				<Row title="Romance" rowMovies={movies} />
			</Route>
			<Route path="/details">
				<PostDetail></PostDetail>
			</Route>
			<Route path="/write">
				<WritePage movieList={movies} callBackfunc={callBackFunction}></WritePage>
			</Route>
		</div>
	);
}

export default App;
