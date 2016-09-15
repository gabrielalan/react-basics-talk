var React = require('react');
var avatar = require('./avatar.png');

var Comment = React.createClass({

	render() {
		return (
			<div className="comment">
				<img src={avatar} alt="avatar" />
				<div className="commentInfo">
					<h2 className="commentAuthor">
						{this.props.author}
					</h2>
					<p>{this.props.children}</p>
				</div>
			</div>
		);
	}
});

module.exports = Comment;
