import styled from 'styled-components';

export const Picker = styled.div`
	position: relative;
	width: 200px;
	height: calc(2rem + 4px);
	border: 2px solid #1c2b39;
	border-radius: calc(1rem + 1px);
	padding: 0;
	background-color: #ffffff;
`;
export const Select = styled.ul`
	position: absolute;
	top: calc(2rem + 4px);
	left: 0;
	z-index: 100;
	width: 200px;
	background-color: #ffffff;
	list-style: none;
	margin: 0;
	overflow: hidden;
	max-height: ${(props) => (props.open ? `auto` : `0`)};
	transition: 0.2s max-height ease-in-out;
	border-radius: 0.5rem;
	/* border: 1px solid #1c2b39; */
`;

export const Option = styled.li`
	display: flex;
	font-size: 0.675rem;
	margin: 0.5rem;
`;
export const SelectedOption = styled.button`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	line-height: 1;
	font-size: 0.75rem;
	width: 100%;
	height: 2rem;
	text-align: left;
	padding: 0 0.75rem;
	svg {
		margin-right: 0.375rem;
		font-size: 0.875rem;
	}
	span {
		line-height: 1;
		font-weight: 600;
		letter-spacing: 0;
	}
`;
