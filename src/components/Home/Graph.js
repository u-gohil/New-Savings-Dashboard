import React, { useEffect } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import { useSelector, useDispatch } from 'react-redux'
import { categoryData } from '../../store/actions/data.actions'
import moment from 'moment'

const Graph = () => {
	const dispatch = useDispatch()

	const categories = useSelector((state) => state.data.category)

	useEffect(() => {
		dispatch(categoryData())
	}, [dispatch])

	console.log(categories)

	const transform = (arr) =>
		Object.entries(arr).reduce((acc, [k, [v]]) => ((acc[k] = v), acc), {})

	const test = transform(categories)

	console.log(test)

	const result = Object.keys(categories).reduce(function (r, k) {
		return r.concat(categories[k])
	}, [])
	console.log(result)

	const test2 = Object.keys(categories)
	console.log(...test2)

	const transform2 = (arr) =>
		Object.entries(arr).reduce((acc, [k, [v]]) => ((acc[k] = v), acc), {})

	const test3 = transform2(test2)

	console.log(test3)
	return (
		<LineChart
			width={500}
			height={300}
			data={result}
			margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
		>
			<Line type="monotone" dataKey="value" stroke="#8884d8" />
			<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
			<XAxis
				interval={0}
				dataKey="timestamp"
				tickFormatter={(tick) => moment(tick).format('Do MMM YY')}
			/>
			<YAxis />
			<Tooltip />
		</LineChart>
	)
}

export default Graph
