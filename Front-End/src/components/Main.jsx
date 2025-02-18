import { artistArray } from '../../api/api.js';
import { songsArray } from '../../api/api.js';
import ItemList from './ItemList';

const Main = ({ type }) => {

	
	return (
		<div className='main'>
			{type === 'artists' || type === undefined ? (
				<ItemList
					title='Artistas'
					items={8}
					itemsArray={artistArray}
					path='/artists'
					idPath='artist'
				/>
			) : (
				<></>
			)}

			{type === 'songs' || type === undefined ? (
				<ItemList
					title='Músicas'
					items={20}
					itemsArray={songsArray}
					path='/songs'
					idPath='song'
				/>
			) : (
				<></>
			)}
		</div>
	);
};

export default Main;
