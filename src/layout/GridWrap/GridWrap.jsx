import React from 'react';

import { Wrap } from './styled';

const GridWrap = ({ children, className, isRoot }) => (
	<Wrap className={className} isRoot={isRoot}>{children}</Wrap>
);

export default GridWrap;
