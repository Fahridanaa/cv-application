import locationIcon from '../../assets/location-outline.svg';
import mailIcon from '../../assets/mail-outline.svg';
import phoneIcon from '../../assets/call-outline.svg';
import '../../styles/ResumeHeader.css';

const attStyle = {
	display: 'flex',
	flexDirection: 'row',
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
		<div id="resume-header">
			{name && <h1 id="resume-name">{name}</h1>}
			<div id="resume-contact">
				{email && (
					<div id="resume-email" style={attStyle}>
						<img src={mailIcon} style={iconStyle} />
						<span>{email}</span>
					</div>
				)}
				{phone && (
					<div id="resume-phone" style={attStyle}>
						<img src={phoneIcon} style={iconStyle} />
						<span>{phone}</span>
					</div>
				)}
				{address && (
					<div id="resume-address" style={attStyle}>
						<img src={locationIcon} style={iconStyle} />
						<span>{address}</span>
					</div>
				)}
			</div>
		</div>
	);
}
