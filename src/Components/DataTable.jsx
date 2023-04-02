import { Box, Button, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getadd } from '../Redux/Projectdata/action'
import {BsCurrencyDollar} from "react-icons/bs"
const DataTable = () => {
    const [page,setpage]=useState(1)
    
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.Projectdata.data)
    useEffect(()=>{
        dispatch(getadd("all",page))
    },[dispatch,page])
  return (
    <Box m="0 2%" >
    <TableContainer >
    <Table size='sm'>
      <Thead>
        <Tr>
            <Th>#</Th>
            <Th>PROJECT NAME</Th>
          <Th>STATUS</Th>
          <Th>LAST UPDATE</Th>
          <Th>PROJECT TIMELINE</Th>
          <Th>ESTIMATION</Th>
        </Tr>
      </Thead>
      <Tbody>
      {data && data.map((el,index)=>{
        return(
            <>
            <Tr key={el._id}>
                <Td>{index}</Td>

                <Td>{el.Title}</Td>
                <Td>{el.Status}</Td>
                <Td>{el.date},{el.time}</Td>
                <Td >{el.date} > {el.date}</Td>

                <Td display={"flex"} textAlign={"center"}><BsCurrencyDollar/>{el.Estimation}</Td>

            </Tr>

            </>

        )      
        })}
        
        
      </Tbody>
      
    </Table>
  </TableContainer>
  <Box display={"flex"} mt="4%" justifyContent={"center"}>
    <button disabled={page<=1} style={{border:"2px solid black" ,borderRadius:"30px",padding:"5px" ,backgroundColor:"skyblue" ,color:"white" }} onClick={()=>setpage(page-1)} >Previous</button>
    <Text w="35px" textAlign={"center"} mt="5px" fontSize={"xl"} fontWeight={"bold"}>{page}</Text>
    <button disabled={page>data.length/10} style={{border:"2px solid black" ,borderRadius:"30px",padding:"5px" ,backgroundColor:"skyblue" ,color:"white" }} onClick={()=>setpage(page+1)}>Next</button>
  </Box>
  </Box>
  )
}

export default DataTable