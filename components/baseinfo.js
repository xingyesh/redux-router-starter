/*
	用户报价基本信息包括：
	   1.城市
	   2.车牌号
	   3.车主姓名
	   每个对应的错误提示
*/

import React from 'react'

class BaseInfo extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='baseinfo'>
				<div>以下所有信息均只用于车险购买，会严格保密</div>
				<div className='left-side'>
					<div className='col-item'>
						<div className='label'>行驶城市</div>
						<input className='item' type='text' />
						<div className='error'>错误提示</div>
					</div>
					<div className='col-item'>
						<div className='label'>车牌号</div>
						<input className='item' type='text' />
						<div className='error'>错误提示</div>
					</div>
					<div className='col-item'>
						<div className='label'>车主姓名</div>
						<input className='item' type='text' />
						<div className='error'>错误提示</div>
					</div>
				</div>
				<div className='right-side'>广告图片</div>
				<div className='clear-both'></div>
			</div>
		)
	}
}

export default BaseInfo