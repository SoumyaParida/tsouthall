import { FC } from 'react'
import styled from 'styled-components'
import AnimatedInText from '../AnimatedInText'
import MobilePicture from '../MobilePicture'

const IconsWrapper = styled.div`
	margin-bottom: 2px;
`

const IconLink = styled.a`
	display: inline-block;
	width: 100%;
`

const Icon = styled.span`
	width: 170px;
	height: 300px;
	margin-right: 16px;
	display: inline-block;
	cursor: pointer;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	transform: scale(0.8) rotate(0);
	transition: transform 100ms ease-out;
	display: block;
  	margin-left: auto;
  	margin-right: auto;
  	width: 50%;


	&:hover {
		transform: scale(1) rotate(-2deg);
	}
`

const Booklist: FC<{ startTimeout?: number }> = ({ startTimeout = 10 }) => (
<IconsWrapper>
		<IconLink
			href="https://twitter.com/MichaelaJaritz"
			target="_blank"
			rel="noopener noreferrer"
			title="Twitter Account von Michaela Jaritz"
		>
			<AnimatedInText timeout={startTimeout + 300}>
			<Icon style={{ backgroundImage: 'url("/images/portraits/mobile/frontcover.jpg")' }} />
				
			</AnimatedInText>
		</IconLink>
		
	</IconsWrapper>
)

export default Booklist
