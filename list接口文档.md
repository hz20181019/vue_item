### 商品列表
接口地址:/listapi
请求方式:get
参数:(前端发给后端的)
参数名称  参数类型 是否必须传值
页数 page  number     否(如果需要分页必须传page)
----我是分割线
返回值:Object
1.code  200  表示成功
  code  201  表示失败
2.list array 一维数组
list包含的数据:
id      图片的id
name    产品名称
img     产品src地址
3.hasmore boolean
true 表示有下页数据
false 表示没有下页数据
###http://132.232.89.22:3000/listapi?page=1 分页请求的地址 测试后端的接口是否能用 选择get/输入接口地址 然后send 看是否能返回地址
输入网页地址然后发送get请求就可以看网页源代码

