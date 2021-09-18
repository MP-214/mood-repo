import React from "react";
import MenuItem from "../MenuItem/menu-item.component";
import "./directory.style.scss";
class Directory extends React.Component {
	constructor() {
		super();
		this.state = {
			sections: [
				{
					title: "Matka Biryani",
					imageURL:
						"https://media-cdn.tripadvisor.com/media/photo-m/1280/18/da/1d/22/matka-biryani.jpg",
					id: 1,
				},
				{
					title: "Hyderabadi Biryani",
					imageURL: "https://i.ytimg.com/vi/tR1PyPMYKdY/maxresdefault.jpg",
					id: 2,
				},
				{
					title: "Afgani Biryani",
					imageURL:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFvuy7e9R9nhngIxuRXCW7FPkgNU3x0Z3ZpfDDsp--bBirU3tWu4ORocdKCx3YBrdWpUE&usqp=CAU",
					id: 3,
				},
				{
					title: "Tandoor Biryani",
					imageURL: "https://i.ytimg.com/vi/nDWPMZ4rm1E/maxresdefault.jpg",
					id: 4,
					size: "large",
				},
				{
					title: "Smoke Biryani",
					imageURL:
						"https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/bsh58aqqhklnns3gdwwp",
					id: 5,
					size: "large",
				},
			],
		};
	}
	render() {
		return (
			<div className="directory-menu-style">
				{this.state.sections.map(({ title, imageURL, id, size }) => (
					<MenuItem key={id} title={title} imageUrl={imageURL} size={size} />
				))}
			</div>
		);
	}
}

export default Directory;
