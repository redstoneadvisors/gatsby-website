import styled from "styled-components"
import { Link } from "gatsby"
export const Container = styled.div`
	--app-height: 100%;
	display: grid;
	grid-template-columns: 1fr;
	border-bottom: 10px solid #c7ae86;
	min-height: 100vh;
	@media screen and (max-width: 500px) {
		border-bottom: none;
	}
	@media screen and (max-width: 499px) {
		min-height: fill-available;
		border-bottom: none;
	}
	background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
	background-color: rgba(0, 0, 0, 0.3);
	overflow: hidden;
	video {
		position: absolute;
		z-index: -1;
		width: 100%;
		object-fit: cover;
	}
`
export const Topo = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	opacity: 0.15;
	z-index: 0;

	object-fit: cover;
`

export const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	border: 0;
	right: 0;
	z-index: -1;
	height: 100%;
	width: 100%;
	background: rgba(0, 0, 0, 0.18);
`

export const Right = styled.div`
	display: grid;
	height: fill-available;
	grid-template-columns: minmax(0, 437px) 1fr;
	text-align: center;
	padding: 0 20px 0 0;
	position: relative;
	@media screen and (max-width: 1350px) {
		grid-template-columns: 1fr;
		padding: 0;
	}
`
export const Intro = styled.h2`
	font-family: "Hoefler Text", serif;
	text-transform: uppercase;
	margin: 0;

	/* opacity: .7 !important; */
	font-size: 40px;
	color: rgba(255, 255, 255, 0.6);
	font-weight: 500;
	margin-bottom: 0.7rem;
	line-height: 1.1;
	@media screen and (max-width: 700px) {
		font-size: 21px;
		margin-bottom: 1rem;
		margin-top: 2rem;
	}
`
export const SubIntro = styled.h3`
	margin: 0;
	font-family: "Hoefler Text", serif;
	text-transform: uppercase;
	/* opacity: .7 !important; */
	font-size: 35.5px;
	color: rgba(255, 255, 255, 0.6);
	font-weight: 500;
	@media screen and (max-width: 700px) {
		font-size: 19px;
		margin-bottom: 0.5rem;
	}
`
export const Tagline = styled.h3`
	font-family: "Hoefler Text", serif;
	color: rgba(255, 255, 255, 1);
	text-transform: uppercase;
	font-size: 18px;
	font-weight: 500;
	border-bottom: 2px solid #c7ae86;
	border-top: 2px solid #c7ae86;
	padding: 20px 0px;
	width: max-content;
	margin: 0 auto;
	@media screen and (max-width: 1000px) {
		padding-left: 2rem;
		padding-right: 2rem;
		font-size: 20px;
		width: 100%;
	}
	@media screen and (max-width: 700px) {
		font-size: 12px;
		width: 100%;
		padding-left: 0;
		padding-right: 0;
		margin-top: 0;
		border: none;
		color: rgba(255, 255, 255, 1);
		padding: 0;
	}
`
export const LogoH = styled.img``

export const CTA = styled(Link)`
	border: 2px solid white;
	color: white;
	border-radius: 100px;
	padding: 0 1.1rem;
	height: 36px;
	display: inline-flex;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-align-items: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	font-weight: 600;
	/* &:hover{
      color: #000;
      background-color: white;

    } */
	animation-delay: 6.5s;

	@media screen and (max-width: 500px) {
		width: 50%;
		height: 55px;
		/* position: absolute;
    bottom: 5%;
    left:50%;
    transform: translateX(-50%); */
		/* background: white; */
		color: #fff;
		mix-blend-mode: screen;
		font-weight: 900;
		border-radius: 0;
		display: none;
	}
`

export const LogoOverlay = styled.div`
	display: flex;
	flex-direction: column;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: center;
	justify-content: center;
	position: relative;
	z-index: 0;
	height: 100%;
	width: 100%;
	background: linear-gradient(rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0) 90%);
	opacity: 0.6;
	@media screen and (max-width: 1350px) {
		display: none;
	}
`
export const Content = styled.div`
	align-self: center;
	justify-self: center;
	grid-column: 2;
	padding: 0 60px;
	@media screen and (max-width: 1350px) {
		grid-column: 1;
		padding: 0 20px;
	}
`

export const Delimiter = styled.div`
	background: #fff;
	height: 100%;
	min-height: 0px;
	animation: grow 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	animation-delay: 6.5s;
	width: 3px;
	align-self: center;
	justify-self: center;
	margin: 50px auto 25px auto;
	/* position: relative;
      top: 50px; */
`

export const MobileLogo = styled.img`
	@media screen and (min-width: 800px) {
		display: none;
	}
	margin-top: -3rem;
	margin-bottom: 3rem;
	width: 80%;
	opacity: 0.8;
	animation: scale-up-center 1s ease-in-out;
`
export const CTAContainer = styled.div`
	@media screen and (max-width: 800px) {
		position: absolute;
		bottom: 0;
		border-radius: 5px;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		height: max-content;
		border-radius: 1px;

		.inner {
			width: 100%;

			transform: translateY(300px);

			padding: 25px 20px 15px 20px;
			background: rgb(193, 162, 108);
			background: rgb(199, 174, 134);
			background: linear-gradient(
				180deg,
				rgba(199, 174, 134, 1) 0%,
				rgba(204, 168, 109, 1) 100%
			);
			--shadow-color: 0deg 0% 0%;
			--shadow-elevation-high: 0.2px -0.3px 0.5px hsl(var(--shadow-color) /
							0),
				1.5px -2.1px 3.9px hsl(var(--shadow-color) / 0.02),
				2.6px -3.7px 6.8px hsl(var(--shadow-color) / 0.03),
				3.7px -5.3px 9.7px hsl(var(--shadow-color) / 0.05),
				5.2px -7.4px 13.6px hsl(var(--shadow-color) / 0.07),
				7.2px -10.3px 18.9px hsl(var(--shadow-color) / 0.08),
				9.9px -14.2px 26px hsl(var(--shadow-color) / 0.1),
				13.7px -19.6px 35.9px hsl(var(--shadow-color) / 0.12);
			box-shadow: var(--shadow-elevation-high);
			animation: slide-in-bottom 1s ease-in-out;
			animation-delay: 5s;
			animation-fill-mode: forwards;
		}
		img {
			opacity: 0;
			margin-top: 15px;
			animation: bounce 2s infinite, fade-in-bck-2 2s;
			/* animation-fill-mode: forwards; */
			animation-delay: 7s;
		}
	}
`
