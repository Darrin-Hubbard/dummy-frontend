import { useState, useEffect } from 'react'
import BabyService from '../../services/baby'
function BabyList(){
  const [ babyList, setBabyList ] = useState([])

  useEffect(()=>{
    const getList = async()=>{
      const list = await BabyService.getBabyList()
      setBabyList(list.babies)
    }
    getList()
  },[])

  return (
    <div>
        <table border="1" style={{margin: '0 auto', fontSize: 32}}>
          <tr>
            <td>Last Name</td>
            <td>First Name</td>
            <td>Middle Name</td>
          </tr>
          {Array.isArray(babyList) ? babyList.map((baby)=>(
            <tr>
              <td>{baby.last_name}</td>
              <td>{baby.first_name}</td>
              <td>{baby.middle_name}</td>
            </tr>
          )):null}
        </table>
    </div>
  );
}

export default BabyList