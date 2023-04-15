// component/test/test.js
Component({
	options:{
   styleIsolation:'shared'
	},
	/**
	 *
	 * 组件的属性列表
	 */
	properties: {
		//第一种简化的方式
		//max:Number

		//第二种完整的定义方式
		max:{
			type:Number,
			value:10   //默认值是10
		}

	},

	/**
	 * 组件的初始数据
	 */
	data: {
   count:0
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		showInfo(){
			console.log(this.data)//输出结果：{count：0，max:10}
			console.log(this.properties)//输出结果：{count：0，max:10}
			console.log(this.data===this.properties)
		},
		//点击事件处理函数
		addCount(){
			if(this.data.count>=this.properties.max) return
			this.setData({
				count:this.data.count+1,
				max:this.properties.max+1
			
			})
			this._showCount()//通过this直接调用自定义函数
		},
		_showCount(){//自定义方法
			wx.showToast({
				title: 'count的值:'+this.data.count,
				icon:'none'
			})
		}
	}
})
