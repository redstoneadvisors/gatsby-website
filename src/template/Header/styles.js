import styled from 'styled-components';

export const HeaderComponent = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: 1rem 0;
	height: 80px;
`;
export const Container = styled.div`
	${(props) => props.theme.container};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
