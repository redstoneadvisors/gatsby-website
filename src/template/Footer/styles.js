import styled from 'styled-components';

export const Breadcrumbs = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 1rem 2rem;
	background-color: #fff;
	a {
		text-decoration: none;
		color: #afb7bd;
		font-size: 0.875rem;
		font-weight: 500;
	}
`;

export const Links = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem;
	background-color: #1c2b39;
	color: #fff;
`;

export const Legal = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem 2rem;
	background-color: #eff0f3;
	font-size: 0.625rem;
	font-weight: 500;
	color: #465158;
`;

export const Copyright = styled.div`
	width: 50%;
`;
export const LegalLinks = styled.ul`
	display: flex;
	justify-content: flex-end;
	flex-wrap: wrap;
	width: 50%;
	li {
		padding: 0.375rem 0.75rem;
	}
	a {
		text-decoration: none;
		color: #465158;
	}
`;
