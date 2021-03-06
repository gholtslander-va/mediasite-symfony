var React = require('../vendor/react.min.js');

module.exports = React.createClass({
  render: function() {
    var songUrl = "/song/" + this.props.songId;
    return (
      <div className="col-sm-2 song-tile">
        <h4><a href={songUrl}>{this.props.title}</a></h4>
        <p>{this.props.author1}</p>
        <p>{this.props.author2}</p>
      </div>
    )
  }
});
