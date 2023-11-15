/* eslint-disable react/prop-types */
import '../styles/Resume.css';
import locationIcon from '../assets/location-outline.svg';
import mailIcon from '../assets/mail-outline.svg';
import phoneIcon from '../assets/call-outline.svg';

export default function Resume({ name, address, phone, email }) {
	return (
		<div id="resume">
			<div id="resume-header">
				{name && <h1 id="resume-name">{name}</h1>}
				<div id="resume-contact">
					{address && (
						<div id="resume-address">
							<img src={locationIcon} />
							<p>{address}</p>
						</div>
					)}
					{phone && (
						<div id="resume-phone">
							<img src={phoneIcon} />
							<p>{phone}</p>
						</div>
					)}
					{email && (
						<div id="resume-email">
							<img src={mailIcon} />
							<p>{email}</p>
						</div>
					)}
				</div>
			</div>
			<div id="resume-body"></div>
		</div>
	);
}
