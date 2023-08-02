import { FC } from 'react'
import styled from 'styled-components'
import AnimatedInText from '../AnimatedInText'

const IconsWrapper = styled.div`
	margin-bottom: 10px;
`

const IconLink = styled.a`
	display: inline-block;
	width: 100%;
`

const Icon = styled.span`
	width: 170px;
	height: 75px;
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

	
`

const PaymentGatewayList: FC<{ startTimeout?: number }> = ({ startTimeout = 10 }) => (
	
	<IconsWrapper>
		<IconLink
			href="https://www.paypal.com/webapps/hermes?token=24240769EA106171W&useraction=commit&rm=1&wpsFlowRedirectToXorouterSkipHermesStartTime=1690915725739&mfid=1690915725538_f82125053e6d1"
			target="_blank"
			rel="noopener noreferrer"
			title="Twitter Account von Michaela Jaritz"
		>
			<AnimatedInText timeout={startTimeout + 300}>
				<span>
					<Icon style={{ backgroundImage: 'url("https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif")' }} />
				</span>
			</AnimatedInText>
		</IconLink>
		
	</IconsWrapper>
)

export default PaymentGatewayList
