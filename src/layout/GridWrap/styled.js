import styled, { css } from 'styled-components';

import { BREAK_POINTS } from 'constants/breakpoints';

const Wrap = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-column-gap: 16px;
	@media ${BREAK_POINTS.laptopMin} {
		grid-template-columns: repeat(12, 1fr);
		grid-column-gap: 16px;
	}
	${({ isRoot }) =>
		isRoot &&
		css`
			margin: 0 16px;
			@media ${BREAK_POINTS.laptopMin} {
				margin: 0 5%;
				grid-template-columns: repeat(12, 1fr);
				grid-column-gap: 16px;
			}
		`}
`;

export { Wrap };
