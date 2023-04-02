import { Box, Button, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightElement, Select } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { SearchIcon} from "@chakra-ui/icons"
import {RiFilter2Fill} from "react-icons/ri"
import ButtonModal from './ButtonModal'
import { useDispatch, } from 'react-redux'
import { getadd } from '../Redux/Projectdata/action'

const Navbar = () => {
    // const [search,setSearch]=useState("")
    const dispatch=useDispatch()
    
    const handlechange=(status)=>{
        // console.log(status,"sa");
        dispatch(getadd(status))
    }
    // useEffect(()=>{
    //     dispatch(getadd(search))
    // },[dispatch,search])
    



  return (
    <Box display={"flex"} justifyContent={"space-around"} > 
    <InputGroup m="2%" w="350px">
        <InputLeftAddon >
            <Select placeholder='Select option' value={"all"} border={"none"} onChange={(e)=>handlechange(e.target.value)} _focus={{border:"none"}}>
            
                <option value='onhold'>On track</option>
                <option value='ontrack'>On hold</option>
                <option value='atrisk'>At risk</option>
                <option value='potentialrisk'>Potential risk</option>

            </Select>
        </InputLeftAddon>
        <InputLeftElement
            pointerEvents='none'
        children={<RiFilter2Fill color='gray.300' />}
        />
        <InputRightElement
            pointerEvents='none'
        children={<SearchIcon color='gray.300' />}
        />
        <Input type='text' placeholder='Search'  />
        
    </InputGroup>
    <Box m="2%" >
        <ButtonModal/>
    </Box>
  </Box>
  )
}

export default Navbar