import { FC } from 'react'
import Page from '../src/hocs/Page'
import BigTitle from '../src/components/BigTitle'
import Subtitle from '../src/components/Subtitle'
import Paragraph from '../src/components/Paragraph'
import MobilePicture from '../src/components/MobilePicture'
import { getText } from '../src/texts/getText'
import PaymentGatewayList from '../src/components/PaymentGatewayList'
import Booklist from '../src/components/Booklist'
import styled from 'styled-components'
import AnimatedInText from '../src/components/AnimatedInText'

const LogoLink = styled.a`
	width: 100%;
	opacity: 1;
	transition: opacity 200ms ease-out;

	&:hover {
		opacity: 0.6;
	}
`

const LogoSloganLine = styled.span`
	width: 100%;
	margin-bottom: 3px;
	margin-Top: 4px;
	height: 19px;
	display: inline-block;
`

const LogoSlogan = styled.span<{ theme: ThemeType }>`
	cursor: pointer;
	width: 100%;
	color: ${({ theme }) => theme.grey};
	font-family: ${({ theme }) => theme.logoFontFamily};
	font-weight: ${({ theme }) => theme.sloganFontWeight};
	font-size: ${({ theme }) => theme.sloganFontSize};
	display: inline-block;
`

const pageName = 'willkommen'
const WelcomePage: FC = () => (
	<Page pageName={pageName}>

		<Subtitle timeout={1000} block>
			{getText(`pages.${pageName}.content.subtitle`)}
		</Subtitle>

		<Booklist/>
		
		
		<BigTitle timeout={1500} color="orange" marginTop={10} marginBottom={0}>
			{getText(`pages.${pageName}.content.individual`)}
		</BigTitle>

		<BigTitle timeout={1800} color="blue" marginTop={10}>
			{getText(`pages.${pageName}.content.sustainable`)}
		</BigTitle>
		
		<PaymentGatewayList startTimeout={1300} block marginTop={10} marginBottom={3}/>

		<Subtitle timeout={2300} block marginTop={10}>
			{getText(`pages.${pageName}.content.quote`)}
		</Subtitle>
		<Paragraph timeout={2400}>{getText(`pages.${pageName}.content.greetings`)}</Paragraph>


			
		

	</Page>

)

export default WelcomePage
