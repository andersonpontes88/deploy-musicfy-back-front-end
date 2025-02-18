import { faMicrophoneLines, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import SingleItem from './SingleItem';

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
	const { pathname } = useLocation();
	const isHome = pathname === '/';
	const isArtists = pathname === '/artists';



	const finalItems = isHome ? items : Infinity;

	return (
		<div className='item-list'>
			<div
				className={`${isHome ? 'item-list__header' : 'item-list__header-modified'}`}
			>
				{isHome ? (
					<h2>{title} populares</h2>
				) : (
					<h2 className='title-list'>
						<span className='microphone-icon'>
							{isArtists ? (
								<FontAwesomeIcon icon={faMicrophoneLines} />
							) : (
								<FontAwesomeIcon icon={faMusic} />
							)}
						</span>
						{'  '}
						{isArtists ? 'Todos os Artistas' : 'Todas as Músicas'}
					</h2>
				)}

				{isHome ? (
					<div className='main__link-box'>
						<Link className='main__link' to={path}>
							Mostrar tudo
						</Link>
					</div>
				) : (
					<></>
				)}
			</div>

			<div className='item-list__container'>
				{itemsArray.filter((currentValue, index) => index < finalItems)
					.map((currObj, index) => (
						<SingleItem
							key={`${index}`}
							idPath={idPath}
							{...currObj}
						/>
					))}

			</div>
		</div>
	);
};

export default ItemList;
