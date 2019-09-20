import { dark } from 'mdx-deck/themes';
import vsDark from 'prism-react-renderer/themes/vsDark';

const blue = '#00adef';
const green = '#8dc53f';
const darkGray = '#3d4549';

export const theme = {
	...dark,
	blue,
	green,
	font: 'Roboto, system-ui, sans-serif',
	weights: ['100'],
	colors: {
		text: '#fff',
		background: darkGray,
		link: blue,
		pre: '#fff',
		preBackground: darkGray,
		code: '#fff',
	},
	h1: {
		textTransform: 'uppercase',
	},
	h2: {
		fontSize: '1.8rem',
		textTransform: 'uppercase',
		position: 'relative',
		opacity: '0.8',

		'&:after': {
			position: 'absolute',
			bottom: '-8px',
			left: '50%',
			transform: 'translate(-50%, 0)',
			height: '1px',
			width: '50px',
			background: '#009fe3',
			content: '""',
		},
	},
	link: {
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
	ul: {
		listStyle: 'none',
		margin: '0',
		padding: '0',
	},
	li: {
		fontSize: '1.777em',
		marginBottom: '0.7em',
		textAlign: 'center',
		a: {
			color: `${blue}!important`,
		},
	},
	codeSurfer: {
		...vsDark,
		plain: {
			backgroundColor: darkGray,
		},
		showNumbers: false,
	},
};
