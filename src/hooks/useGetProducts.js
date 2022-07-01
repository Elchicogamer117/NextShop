import { useEffect, useState } from 'react'
import axios from 'axios'

const useGetProducts = (API) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(API)
      const filterProducts = response.data.filter(product => {
        var RegExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if (RegExp.test(product.images[0])){
          return product.images.length > 0
        }
      })
      setProducts(filterProducts)
    }
    getData()
    }, [])
    return products
}

export default useGetProducts
