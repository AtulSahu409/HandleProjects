import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { GoPlus } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import { postadd } from '../Redux/Projectdata/action'

const ButtonModal = () => {
    const [details,setDetails]=useState([])
    const dispatch=useDispatch()
    const {isError,IsLoading}=useSelector((state)=>state.Projectdata)
    console.log(isError,IsLoading,"pro")
    const toast=useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
      
        const initialRef = React.useRef(null)
        const finalRef = React.useRef(null)
    const handlechange=(e)=>{
        let name=e.target.name
        let type=e.target.value
        setDetails({...details,[name]:type})
        // console.log(details)
    }


    const handleclick=()=>{
        dispatch(postadd(details))
        if(isError===false){
            toast({
                title:'Project Add Successfully',
                position:"bottom",
                status: 'success',
                duration: 2000,
                isClosable: true,
              })
        }
        else{
            toast({
                title:'Project Not Add',
                position:"bottom",
                status: 'error',
                duration: 2000,
                isClosable: true,
              })

        }
    }      
  return (
    
          <>
            <Button onClick={onOpen}  leftIcon={<GoPlus />} colorScheme='blue' variant='solid'>
                New projects
            </Button>
            
      
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>PROJECT DETAILS</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>PROJECT NAME</FormLabel>
                    <Input required={true} ref={initialRef} placeholder='PROJECT NAME' name="Title" onChange={handlechange} />
                  </FormControl>
      
                  <FormControl mt={4}>
                    <FormLabel>STATUS</FormLabel>
                    <Select required={true} name="Status" onChange={handlechange} >
                        <option value='onhold'>On track</option>
                        <option value='ontrack'>On hold</option>
                        <option value='atrisk'>At risk</option>
                        <option value='potentialrisk'>Potential risk</option>

                    </Select>
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>ESTIMATION</FormLabel>
                    <Input ref={initialRef} placeholder='ESTIMATION' name="Estimation" onChange={handlechange} />
                  </FormControl>
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={handleclick}>
                    Save
                  </Button>
                  <Button onClick={onClose}>
                    Cancel
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }
export default ButtonModal