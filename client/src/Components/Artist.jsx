import React, { Component } from 'react';

class Artists extends Component {
	state = {
		artists: [
			{id: 1, name: 'Paul Booth', tattooStyle: 'Black & White', website: 'http://www.lastritesgallery.com/'},
			{id: 2, name: 'Sailor Jerry', tattooStyle: 'Old School', website: 'http://www.sailorjerry.com/'}
	  ]
	}

	render () {
		return (

			<div>
          {this.state.artists.map((artist, index) => 
            <div className="Artist" key={index}>
						<br/>
						<br/>
						<img src="https://www.w3schools.com/howto/img_avatar.png" alt="tattoo artist"/>
							<div className="card">
							<h4><b>{artist.name}</b></h4> 
							<p>Style: {artist.tattooStyle}</p>
							<p><a href="{artist.website}">Website</a></p> 
							</div>
					  </div>
          )}
      </div>
		)
	}
}

export default Artists; 