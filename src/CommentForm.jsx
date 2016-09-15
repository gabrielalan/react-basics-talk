var React = require('react');

var CommentForm = React.createClass({

	getInitialState() {
		return {author: '', text: ''};
	},

	handleAuthorChange(e) {
		this.setState({author: e.target.value});
	},

	handleTextChange(e) {
		this.setState({text: e.target.value});
	},

	handleSubmit(e) {
		e.preventDefault();

		var author = this.state.author.trim(),
			text = this.state.text.trim();

		if (!author || !text)
			return;

		this.props.onCommentSubmit({author, text});

		this.setState({ author: '', text: '' });
	},

	render() {
		return (
			<form className="commentForm" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label htmlFor="author">Author</label>
					<input
						id="author"
						className="form-control"
						type="text"
						placeholder="Your name"
						value={this.state.author}
						onChange={this.handleAuthorChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="text">Text</label>
					<input
						id="text"
						className="form-control"
						type="text"
						placeholder="Say something..."
						value={this.state.text}
						onChange={this.handleTextChange}
					/>
				</div>
				<button type="submit" className="btn btn-primary">Post</button>
			</form>
		);
	}
});

module.exports = CommentForm;
