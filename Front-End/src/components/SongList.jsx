import { useState } from 'react';
import SongItem from './SongItem';

const SongList = ({ songsArray }) => {
	const [items, setItems] = useState(5);
	const [seeMore, setSeeMore] = useState(true);

	const handleAddItems = () => {
		setItems(items + 5);
	};
	const handleLessItems = () => {
		setItems(items - 5);
	};

	return (
		<div className='song-list'>
			{songsArray
				.filter((currentValue, index) => index < items)
				.map((currentSongObj, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<SongItem key={index} {...currentSongObj} index={index} />
				))}

			{seeMore ? (
				// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
				<p
					className='song-list__see-more'
					onClick={() => {
						handleAddItems();
						setSeeMore(false);
					}}
				>
					Ver mais
				</p>
			) : (
				// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
				<p
					className='song-list__see-more'
					onClick={() => {
						handleLessItems();
						setSeeMore(true);
					}}
				>
					Ver menos
				</p>
			)}
		</div>
	);
};

export default SongList;
