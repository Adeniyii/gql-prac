import React from 'react'
import Nav from '../Components/Nav'
import Wrapper from '../Components/Wrapper';
import { useApollo } from '../utils/createApolloClient';

const register = () => {
	return (
    <Wrapper>
			{/* <Nav /> */}
      <h1>register</h1>
			<form className="flex flex-col gap-4">
				<input type="text" name='username' />
				<input type="email" name='email' />
				<input type="text" name='password' />
				<select name='subscription'>
					<option value="daily">Daily</option>
					<option value="weekly">Weekly</option>
					<option value="monthly">Monthly</option>
				</select>
				<button>Sumbit</button>
			</form>
    </Wrapper>
  );
}

export default useApollo({ssr: false})(register)
