//cSpell: disable
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import {
	faHeadphones,
	faMicrophoneLines,
	faMusic,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const AnimateBackground = () => {
	return (
		<div className='container'>
			<div className='bubbles'>
				<span style={{ '--i': '5' }} />
				<span style={{ '--i': '11' }} />
				<span style={{ '--i': '7' }} />
				<span style={{ '--i': '14' }} />
				<span style={{ '--i': '18' }} />
				<span style={{ '--i': '9' }} />
				<span style={{ '--i': '2' }} />
				<FontAwesomeIcon
					className='phone__icon'
					icon={faHeadphones}
					style={{ '--i': '7' }}
				/>
				<span style={{ '--i': '12' }} />
				<span style={{ '--i': '16' }} />
				<span style={{ '--i': '3' }} />
				<span style={{ '--i': '8' }} />
				<span style={{ '--i': '19' }} />
				<span style={{ '--i': '10' }} />
				<span style={{ '--i': '1' }} />
				<span style={{ '--i': '9' }} />
				<span style={{ '--i': '15' }} />
				<span style={{ '--i': '11' }} />
				<FontAwesomeIcon
					className='phone__icon'
					icon={faMicrophoneLines}
					style={{ '--i': '5' }}
				/>
				<span style={{ '--i': '8' }} />
				<span style={{ '--i': '5' }} />
				<span style={{ '--i': '11' }} />
				<span style={{ '--i': '7' }} />
				<span style={{ '--i': '14' }} />
				<span style={{ '--i': '18' }} />
				<span style={{ '--i': '9' }} />
				<span style={{ '--i': '2' }} />
				<span style={{ '--i': '12' }} />
				<span style={{ '--i': '16' }} />
				<span style={{ '--i': '3' }} />
				<span style={{ '--i': '8' }} />
				<span style={{ '--i': '19' }} />
				<span style={{ '--i': '10' }} />
				<span style={{ '--i': '1' }} />
				<span style={{ '--i': '9' }} />
				<FontAwesomeIcon
					className='phone__icon'
					icon={faMusic}
					style={{ '--i': '7' }}
				/>
				<span style={{ '--i': '15' }} />
				<span style={{ '--i': '11' }} />
				<span style={{ '--i': '8' }} />
				<span style={{ '--i': '1' }} />
				<span style={{ '--i': '9' }} />
				<span style={{ '--i': '15' }} />
				<span style={{ '--i': '11' }} />
				<span style={{ '--i': '8' }} />
				<span style={{ '--i': '1' }} />
				<FontAwesomeIcon
					className='phone__icon'
					icon={faSoundcloud}
					style={{ '--i': '10' }}
				/>
				<span style={{ '--i': '9' }} />
				<span style={{ '--i': '15' }} />
				<span style={{ '--i': '11' }} />
				<span style={{ '--i': '8' }} />
			</div>
		</div>
	);
};

export default AnimateBackground;
