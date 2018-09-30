import React, {Component} from 'react';
import { Query } from 'react-apollo';

// queries
import { getMoviesQuery } from '../queries/queries';

import { Modal } from 'antd';


class MovieList extends Component {

	state = { visible: false };


	showModal = () => {
		this.setState({
			visible: true,
		});
	}

	handleOk = (e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
	}

	handleCancel = (e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
	}


	render() {
		return (
			<div className="container" data-state="Movie App">

				<Modal
					centered
					title="Basic Modal"
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Modal>

				<div className="device" data-view="list">
					<ul className="movie-list layer" data-layer="list">
						<Query query={getMoviesQuery}>
							{({ loading, error, data }) => {
								if (loading) return <div>Loading...</div>;
								if (error) return <div>Error.</div>;

								return data.movies.map(({ id, title, description }) => (
									<li className="content" key={id} onClick={this.showModal}>
										<div className="bg"></div>
										<div className="avatar"></div>
										<div className="title">{title}</div>
										<p>{ description }</p>
									</li>
								))
							}}
						</Query>
					</ul>
				</div>
			</div>
		);
	}
}

export default MovieList;
