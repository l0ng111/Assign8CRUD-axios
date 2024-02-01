import './App.css'

//import reactLogo from './assets/react.svg'
import { useState } from 'react'

//import viteLogo from '/vite.svg'

interface IProduct {
  id: number
  name: string
  price: number

}
const arrayData :IProduct[] =[{
  id:0,
  name: '',
  price: 0,
}]
function App() {
  
  
  const [nameProduct, setNameProduct]=useState<string>('')
  const [priceProduct, setPriceProduct]=useState<number>(0)
  const [isEdit,setIsEdit]=useState<boolean>(false)
  const [list, setList]=useState<IProduct[]>(arrayData)
  const [idProduct, setIdProduct] = useState<number>(0);
  const handleNameProduct = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const newName : string = event.target.value
    setNameProduct(newName)
  }
  const handlePriceProduct = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const newPrice : number = event.target.valueAsNumber
    setPriceProduct(newPrice)
  }
 /* const handleAddOrEdit = () =>  { if(isEdit == true){
    const newData : IProduct ={
      id: Math.random(),
      name: nameProduct,
      price: priceProduct
     }
      const newArray= [...list, newData]
     setList(newArray)
     setIsEdit(false)
     setNameProduct('')
     setPriceProduct(0)
     
    }
     else { const newData : IProduct ={
      id: ,
      name: nameProduct,
      price: priceProduct
     }
      const newArray= [...list, newData]
     setList(newArray)
     setNameProduct(nameProduct)
      setPriceProduct(priceProduct)
      setIsEdit(true)
     }
    
  }*/
  const handleAddOrEdit = () => {
    if (isEdit === true) {
      const newProduct: IProduct = {
        id: idProduct,
        name: nameProduct,
        price: priceProduct,
      };
      const newData = list.map((itemProduct) => {
        if (itemProduct.id === idProduct) {
          return newProduct;
        }
        return itemProduct;
      });
      setList(newData);
      setNameProduct('');
      setPriceProduct(0);
      setIsEdit(false);
     setIdProduct(0);
    } else {
      const newProduct: IProduct = {
        id: Math.random(),
        name: nameProduct,
        price: priceProduct,
      };
      const newData = [...list, newProduct];
      setList(newData);
      setNameProduct('');
      setPriceProduct(0);
    }
    const handleDeleteProduct = (product: IProduct) => {
      const newData1 = list.filter((item) => {
        if (item.id !== product.id) {
          return item;
        }
      });
      setList(newData1);
    };

    const handleUpdateProduct = (product: IProduct) => {
      setNameProduct(product.name);
      setPriceProduct(product.price);
      setIsEdit(true);
      setIdProduct(product.id);
    };
  }; 
  return (<div>
    <div className='h-screen flex flex-col  bg-green-100
     justify-center items-center'>
      <div className=' '>
      <p className=' gap-4 text-center text-2xl '>thêm sửa xóa</p>
      <form className='flex shadow-md'>
        <input
        className='
          p-4
        mt-auto my-2
         rounded-lg 
         focus: border-gray-50 
        ' 
        type="text"
        placeholder='Tên sản phẩm'
        value={nameProduct}
        onChange={(event)=>handleNameProduct(event)} 
        />
         <input
        className='
         p-4
        mt-auto my-2
         border rounded-lg focus: border-gray-50 
         ' 
        type="number"
        placeholder='Giá sản phẩm'
        value={priceProduct}
        onChange={(a)=>handlePriceProduct(a)} 
        />
       <button className='bg-blue-500 mx-2 my-2 p-4 
       rounded-lg shadow-md focus: border-blue-500 
       text-center text-white'
       onClick={()=>handleAddOrEdit()}
       >{isEdit ? "Sửa": "Thêm"}</button> 
      </form>
      <div className=' flex flex-col px-2 py-2 p-4
               mt-auto my-2
               border rounded-lg focus: border-gray-400 
                '>
        {list.map((item, index)=>(
          <div className='flex flex-1 flex-col gap-4'>
            <div className='w-full flex gap-4' key={index}>
            <div className='mx-2'>id:{item.id}</div>
            <div>name:{item.name}</div>
            <div>price:{item.price}</div>
            <div className='flex gap-2 mx-0'>
            <button className=' w-full' onClick={(item)=>handleUpdateProduct(item)} >Sửa</button>
            <button className=' w-full' onClick={()=>handleDeleteProduct()}>Xóa</button>
            </div>
           

          </div>
          
          </div>

        ))}
      </div>
      </div>
     

    </div>
  </div>
   
  )
  }

export default App
/* <>
//function hidden part: const [count, setCount] = useState(0)
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>*/