import {useState} from 'react'
import {Table, Input} from 'antd'
const dataSource =  [] 
for(let i = 0; i< 2000; i++) {
  dataSource.push({
    key: "key" + i,
    name: "胡彦斌",
    age: 100 + i,
    address: "西湖区湖底公园1号",
  })
}
function debounce(fn) {
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, 500);
  }
}
export default function AntTable() {
  const [data, setData] = useState(() => {
    return dataSource
  })
  const handChange = debounce((v,index) => {
    const val = v.target.value
    const newArr = [...data]
    newArr[index] = {...newArr[index], name: val}
    setData(newArr)
  })
  // const handChange = (v) => {
  //   const val = v.target.value
  //   const newArr = [...data]
  //   newArr[0] = {...newArr[0], name: val}
  //   setData(newArr)
  // }
  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      shouldCellUpdate(r,p){
        if (r === p) return false
        return true
      },
      render(value, r, index) {
        console.log('rrrrr')
        return <Input defaultValue={value} onChange={(v) => handChange(v, index)}/>
      }
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
    },
  ];
  return <Table pagination={false} dataSource={data} columns={columns} />;
}
