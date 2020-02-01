import React, { Suspense } from 'react'
import Page from '../../layout/Page'
import AccForm from '../../components/AddAccount/Form'
import Card from '@material-ui/core/Card'
import SubDivider from '../../components/Home/SubDivider'

const AddAccount = () => {
	return (
		<Page>
			<Suspense fallback={<p>Loading</p>}>
				<SubDivider>Add Account </SubDivider>
				<br />
				<div className="w-full ">
					<Card>
						<div className="border-r border-b border-l border-gray-400  lg:border-t  bg-white rounded-b lg:rounded-r  lg:rounded-b p-4 flex flex-col justify-between leading-normal">
							<div className="flex items-center w-full ">
								<AccForm />
							</div>
						</div>
					</Card>
				</div>
			</Suspense>
		</Page>
	)
}

export default AddAccount
