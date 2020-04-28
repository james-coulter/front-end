import REact from 'react';
import PropTypes from 'prop-types';
import './AlbumList.css';

cont AlbumList = ({ songs, audioControl }) => {
    const renderAlbums = () => {
        returnsongs.map((song, i) => {
            return(
                <li
                    onClick={() => {
                        audioControl(song);
                        }}
                        className='album-item'
                        key={i}
                        >
                        <div>
                            <div className='album-image'>
                            <img alt='album' src={song.track.album.images[0].url} />
                            <div className='play-song'>
                                <i 
                                className='fa fa-play-circle-o play-btn'
                                aria-hidden='true'
                                />
                            </div>
                            </div>

                        <div className='album-details'>
                        <p className='album-name'>{song.track.album.name}</p>
                        <p className='artist-name'>{song.trac.album.artists[0].name}</p>
                        </div>
                        </div>  
                </li>
            );
          });
        };

        return<ul className='album-view-container'>{renderAlbums()}</ul>;
    };

    AlbumList.propTypes = {
        songs: PropTypes.array,
        audioControls: PropTypes.func
    };

    export default AlbumList;