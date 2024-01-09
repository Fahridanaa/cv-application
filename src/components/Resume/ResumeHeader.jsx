import locationIcon from '../../assets/location-outline.svg';
import mailIcon from '../../assets/mail-outline.svg';
import phoneIcon from '../../assets/call-outline.svg';

const attStyle = {
	display: 'flex',
	gap: '4px',
	alignItems: 'center',
	justifyContent: 'flex-start',
	padding: '0',
	margin: '0',
	border: 'none',
};

const iconStyle = {
	width: '1.2rem',
	height: '1.2rem',
	padding: '0',
	margin: '0',
	border: 'none',
	fill: 'white',
	fontWeight: '900',
};
/* eslint-disable react/prop-types */
export default function ResumeHeader({ name, address, phone, email }) {
	return (
		<div id="resume-header" className="flex justify-center items-center flex-col bg-[#6bbfef] text-black p-4 gap-4">
			{name && <h1 id="resume-name" className="text-4xl m-0 text-center">{name}</h1>}
			<div id="resume-contact" className="flex justify-center gap-2 flex-wrap">
				{email && (
					<div id="resume-email" style={attStyle}>
						<img src={mailIcon} style={iconStyle} />
						<span className="text-black m-0">{email}</span>
					</div>
				)}
				{phone && (
					<div id="resume-phone" style={attStyle}>
						<img src={phoneIcon} style={iconStyle} />
						<span className="text-black m-0">{phone}</span>
					</div>
				)}
				{address && (
					<div id="resume-address" style={attStyle}>
						<img src={locationIcon} style={iconStyle} />
						<span className="text-black m-0">{address}</span>
					</div>
				)}
			</div>
		</div>
	);
}
