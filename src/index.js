import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className='ui container comments'>

			<ApprovalCard>
				<div>
					<h4>Warning!</h4>
					Are you sure want to do this?
				</div>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Bruce" 
					timeAgo="Today at 2:00 pm" 
					content="Cool dude"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			
			<ApprovalCard>
				<CommentDetail 
					author="Skylar" 
					timeAgo="Yesterday at 6:00 pm" 
					content="Walter loves you"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail 
					author="Sam" 
					timeAgo="Yesterday at 7:00 am" 
					content="Jim is waiting for you"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	)
}

ReactDOM.render(<App/>,document.querySelector('#root'));