var React = require('react');
var Comment = require('./Comment');

var CommentList = React.createClass({

	mapToComments() {
		return this.props.data.map(current => <Comment key={current.id} author={current.author}>{current.text}</Comment>);
	},

	render() {
		return (
			<div className="commentList">{this.mapToComments()}</div>
		);
	}
});

module.exports = CommentList;
