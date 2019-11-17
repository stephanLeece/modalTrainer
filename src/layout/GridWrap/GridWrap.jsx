import React from 'react';

import { Wrap } from './styled';

const GridWrap = ({ children, className }) => (
	<Wrap className={className}>{children}</Wrap>
);

export default GridWrap;
