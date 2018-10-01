import React, {Component} from 'react';
import { Query } from 'react-apollo';

// queries
import { getMoviesQuery, getMovieQuery } from '../queries/queries';

import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';

class MovieList extends Component {
	state = {
		visible: false,
		activeId: ''
	};

	showModal = id => {
		this.setState({
			visible: true,
			activeId: id
		});
	};

	handleOk = (e) => {
		this.setState({
			visible: false,
		});
	};

	handleCancel = (e) => {
		this.setState({
			visible: false,
		});
	};

	render() {
		return (
			<div className="container" data-state="Movie App">

				<Modal
					title="Detail"
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
					footer={[
						<Button key="submit" type="primary" onClick={this.handleOk}>
							OK
						</Button>,
					]}
				>

					<div>
						<Query
							query={getMovieQuery}
							variables={{ id: this.state.activeId }}>

							{({ loading, error, data }) => {
								if (loading) return <div>Loading...</div>;
								if (error) return <div>Error.</div>;

								return <div>
									<h3>{ data.movie.title }</h3>
									<p>{ data.movie.year }</p>
									<p>{ data.movie.description }</p>
									<br/>
									<h4>{ data.movie.director.name }</h4>
									{
										data.movie.director.movies.map(movie => (
											<div>{movie.title}</div>
										))
									}
								</div>
							}}
						</Query>
					</div>
				</Modal>

				<div className="device" data-view="list">
					<ul className="movie-list layer" data-layer="list">
						<Query query={getMoviesQuery}>
							{({ loading, error, data }) => {
								if (loading) return <div>Loading...</div>;
								if (error) return <div>Error.</div>;

								return data.movies.map(({ id, title, description }) => (
									<li className="content" key={id} onClick={() => {
										this.showModal(id)
									}}>
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
