import React from "react"
import { graphql } from "gatsby"
import {
	Container,
	Overlay,
	Right,
	Intro,
	SubIntro,
	Tagline,
	Topo,
	LogoOverlay,
	CTA,
	Content,
	Debug,
	Delimiter,
	MobileLogo,
	CTAContainer,
} from "./styles"
import caret from "../../../images/computer-mouse-scrollwheel.svg"
import video from "../../../images/car3.mp4"
import Logo from "../../../images/logo-w.svg"
import Top from "../../../images/top.svg"
import bg from "../../../images/sq-topo-g.svg"
import MobileLogoWhite from "../../../images/red-drop.svg"
const HomeHero = ({ section: { elements } }) => {
	const videoRef = React.useRef()
	const setPlayBack = () => {
		videoRef.current.playbackRate = 0.8
	}

	const appHeight = () => {
		const doc = document.documentElement
		doc.style.setProperty(" — app-height", `${window.innerHeight}px`)
	}
	window.addEventListener("resize", appHeight)
	appHeight()

	return (
		<Container>
			<Topo src={bg} />
			<video
				ref={videoRef}
				onCanPlay={() => setPlayBack()}
				height='100%'
				controls={false}
				autoPlay={true}
				playsInline={true}
				muted={true}
				loop={true}
			>
				<source src={video} type='video/mp4' autoPlay={true} />
			</video>
			<Overlay background={Top}>
				<div></div>
			</Overlay>
			<Right>
				<LogoOverlay className='slide-in-left'>
					<img src={Logo} />
				</LogoOverlay>
				<Content>
					<MobileLogo src={MobileLogoWhite} />
					<Intro className='text-focus-in'>
						{elements.intro.value}
					</Intro>
					<SubIntro className='text-focus-in-1'>
						{elements.sub_intro.value}
					</SubIntro>
					z
					{/* <Tagline className="text-focus-in-2" >{elements.tagline.value}</Tagline> */}
					<CTAContainer>
						<div className='inner'>
							<Tagline>{elements.tagline.value}</Tagline>

							{/* <Delimiter/> */}
							<img src={caret} height='30px' width={"auto"} />
						</div>
						<CTA href='#see-more' className='text-focus-in'>
							SEE MORE
						</CTA>
					</CTAContainer>
				</Content>
			</Right>
		</Container>
	)
}

export default HomeHero

export const HomeHeroFragment = graphql`
	fragment HomeHeroFragment on kontent_item_section___home_hero {
		id
		system {
			id
			type
			codename
		}
		elements {
			intro {
				value
			}
			sub_intro {
				value
			}
			tagline {
				value
			}
			graphic {
				value {
					height
					description
					width
					url
				}
			}
		}
	}
`
