/* eslint-disable react/prop-types */
// Resume.jsx
import '../../styles/Resume.css';

export default function Resume({ children }) {
	console.log(children);
	return <div id="resume">{children}</div>;
}
