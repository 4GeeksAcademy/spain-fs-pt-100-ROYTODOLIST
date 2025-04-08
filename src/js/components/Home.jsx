import React from "react";
import Listado from "./lista";


//create your first component
const Home = () => {
	return (
		<div className="image">

			<div className="row">

				<span className="Letra">Todo List </span>

			</div>
			<div className="row d-flex flex-column align-items-center">
				<div className="col-sm-12 col-lg-6">
				<div class="card bg-transparent"><Listado /></div>
				</div>



			</div>

		</div>


	);
};

export default Home;