import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './WritePage.css';

interface WriteProps {
	movieList: Movie[];
	callBackfunc: (cbMoviesList: Movie[]) => void;
}

type Movie = { original_name: string; name: string; poster_path: string };

function WritePage(props: WriteProps) {
	const [postDetail, setPostDetail] = useState({
		title: '',
		content: '',
	});
	const [previewImage, setPreviewImage] = useState({
		imgSrc: '',
	});
	const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setPostDetail({
			...postDetail,
			[name]: value,
		});
		console.log(postDetail);
	};
	const getContentData = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setPostDetail({
			...postDetail,
			[name]: value,
		});
		console.log(postDetail);
	};
	const addMovie = () => {
		let newMovie = {
			original_name: 'Nully',
			name: 'Nully',
			poster_path: 'https://posterspy.com/wp-content/uploads/2020/03/shutter-island-genzo-1280.jpg',
		};
		props.callBackfunc(props.movieList.concat({ ...newMovie }));
	};
	const handleFileOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let reader = new FileReader();
		console.log(e.target);
		console.log(e.target.files);
		let tmpFiles: FileList | null;
		tmpFiles = e.target.files;
		let file = tmpFiles?.item(0);
		console.log(file);
		reader.onloadend = () => {
			console.log(reader.result);
			if (reader.result != null) {
				let toString;
				toString = reader.result.toString();
				let source = {
					imgSrc: toString,
				};
				setPreviewImage(source);
			}
		};
		if (file != null) {
			reader.readAsDataURL(file);
		}
	};
	return (
		<div>
			<div className="form-wrapper">
				<input className="title-input" type="text" placeholder="제목" onChange={getValue} name="title" />
				<textarea className="text-area" placeholder="내용" onChange={getContentData} name="content" />
				<input
					className="image-input"
					type="file"
					accept="image/jpg, image/png, image/jpeg, image/gif"
					onChange={handleFileOnChange}
				/>
			</div>
			<Link to="/">
				<button className="submit-button" onClick={addMovie}>
					입력
				</button>
			</Link>
			<img className="previewImg" src={previewImage.imgSrc} />
		</div>
	);
}

export default WritePage;
