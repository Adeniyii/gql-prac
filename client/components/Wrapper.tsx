import React, { FC, ReactNode } from 'react'
import Nav from './Nav';

interface Props {
	children: ReactNode
}

const Wrapper: FC<Props> = ({children}) => {
	return (
    <div className="min-h-screen pb-10 ">
			<Nav />
      <div className="max-w-3xl mx-auto">{children}</div>
    </div>
  );
}

export default Wrapper
