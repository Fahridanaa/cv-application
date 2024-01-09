/* eslint-disable react/prop-types */
export default function Resume({ children }) {
	console.log(children);
	return <div id="resume" className="w-[210mm] h-[297mm] flex flex-col shadow-[0_-1px_3px_2px_#888888]">{children}</div>;
}
