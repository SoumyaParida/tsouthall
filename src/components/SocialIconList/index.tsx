import { FC } from 'react'
import styled from 'styled-components'
import AnimatedInText from '../AnimatedInText'

const IconsWrapper = styled.div`
	margin-bottom: 10px;
`

const IconLink = styled.a`
	display: inline-block;
`

const Icon = styled.span`
	width: 24px;
	height: 24px;
	margin-right: 16px;
	display: inline-block;
	cursor: pointer;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	transform: scale(0.8) rotate(0);
	transition: transform 100ms ease-out;

	&:hover {
		transform: scale(1) rotate(-2deg);
	}
`

const SocialIconList: FC<{ startTimeout?: number }> = ({ startTimeout = 10 }) => (
	<IconsWrapper>
		<IconLink
			href="http://www.twitter.com/tsouthall"
			target="_blank"
			rel="noopener noreferrer"
			title="Follow me in twitter"
		>
			<AnimatedInText timeout={startTimeout + 300}>
				<span>
					<Icon style={{ backgroundImage: 'url("/twitter.svg")' }} />
				</span>
			</AnimatedInText>
		</IconLink>
		<IconLink
			href="http://www.facebook.com/people/Twyla-Southall/1563107341"
			target="_blank"
			rel="noopener noreferrer"
			title="Follow me in Facebook"
		>
			<AnimatedInText timeout={startTimeout + 350}>
				<span>
					<Icon style={{ backgroundImage: 'url("/facebook.svg")' }} />
				</span>
			</AnimatedInText>
		</IconLink>
		<IconLink
			href="https://instagram.com/tdsouthall/"
			target="_blank"
			rel="noopener noreferrer"
			title="Follow me in Instagram"
		>
			<AnimatedInText timeout={startTimeout + 400}>
				<span>
					<Icon style={{ backgroundImage: 'url("/instagram.svg")' }} />
				</span>
			</AnimatedInText>
		</IconLink>
	</IconsWrapper>
)

export default SocialIconList
