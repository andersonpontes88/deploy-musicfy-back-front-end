//cSpell: disable
import { Link } from 'react-router-dom';
import logoMusicfy from '../assets/logo-musicfy1.svg';
import logoMusicfyText from '../assets/logo-musicfy2.svg';

const Header = () => {
	return (
		<div className='header'>
			<Link to='/' className='header__logo--container'>
				<img className='header__logo' src={logoMusicfy} alt='Logo Musicfy' />
				<div className='header-logo--img'>
					<span>a</span>
				</div>
			</Link>
			<Link className='header__link' to='/'>
				<img
					className='header__logo--modifier'
					src={logoMusicfyText}
					alt='Logo Musicfy Text'
				/>
			</Link>
		</div>
	);
};

export default Header;
