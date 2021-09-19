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
					imageUrl:
						"https://media-cdn.tripadvisor.com/media/photo-m/1280/18/da/1d/22/matka-biryani.jpg",
					id: 1,
					linkUrl: "Biryani",
				},
				{
					title: "Fries",
					imageUrl:
						"https://cdn.tasteatlas.com/images/dishes/37a5c7e2ca0f45aca4111c3b06796b1d.jpg",
					id: 2,
					linkUrl: "Fries",
				},
				{
					title: "Tandoor",
					imageUrl:
						"https://i0.wp.com/lemoninginger.com/wp-content/uploads/2016/01/1601_Snacks_TandooriPaneerTikka-003.jpg?resize=750%2C785",
					id: 3,
					linkUrl: "Tandoor",
				},
				{
					title: "Sandwich",
					imageUrl:
						"https://c.ndtvimg.com/2019-03/rlh4rojo_protein-rich-sandwich-ideas_625x300_04_March_19.jpg",
					id: 4,
					size: "large",
					linkUrl: "Sandwich",
				},
				{
					title: "Rolls",
					imageUrl: "https://static.toiimg.com/photo/81590116.cms",
					id: 5,
					size: "large",
					linkUrl: "Rolls",
				},
			],
		};
	}
	render() {
		return (
			<div className="directory-menu-style">
				{this.state.sections.map(({ id, ...sectionProps }) => (
					<MenuItem key={id} {...sectionProps} />
				))}
			</div>
		);
	}
}

export default Directory;
