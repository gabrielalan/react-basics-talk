var React = require('react');
var CommentBox = require('./CommentBox');

var App = React.createClass({

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>Comentários</h2>
				</div>
				<CommentBox url="http://localhost:3001/comments.php" />
			</div>
		);
	}
});

module.exports = App;
