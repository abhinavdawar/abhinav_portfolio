import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import Resume from '../../assests/resume.pdf';
import { TypeAnimation } from 'react-type-animation';
import './Landing.css';

const Landing = () => {
	const handleDownload = () => {
		const link = document.createElement('a');
		link.download = 'AbhinavDawar_Resume';

		link.href = Resume;

		link.click();
	};

	return (
		<div className='landing'>
			<div className='landing-image'></div>
			<div className='landing-content'>
				<h3>
					<span className='landing-name'>ABHINAV DAWAR</span>
				</h3>
				<div className='landing-work'>
					<TypeAnimation
						sequence={[
							'Python Programming',
							1000,
							'Database Operations',
							1000,
							'Cloud Computing',
							1000,
							'Team Management',
							1000,
						]}
						speed={20}
						style={{ fontSize: '5rem' }}
						repeat={Infinity}
					/>
				</div>
				<span className='landing-text'>
				Dynamic andresult-driven  professionalkeen  to  pursue  roles  preferably  inITsectorswith  a  focus  to  
				leverage  expertise  inBackend Development andSoftware Engineeringtodrive efficiency and success for the 
				right career prospects. 
				</span>
				<CustomButton name='Download CV' onClick={handleDownload} />
			</div>
		</div>
	);
};

export default Landing;
