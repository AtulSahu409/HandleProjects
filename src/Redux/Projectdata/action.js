import * as types from "./actiontype"
import axios from "axios"

const getadd=(data,page)=>(dispatch)=> {
 
    dispatch({type:types.Get_Add_Request})
      
    return axios.get(`http://localhost:3010/project/${data}/${page}`)
      .then((r) => {
          dispatch({type:types.Get_Add_Success, payload:r.data})
          console.log(r.data)
          
      })
      .catch((e) =>{dispatch({type: types.Get_Add_Failure})
          console.log(e) 
        })
    
      
    }
    

const postadd=(data)=>(dispatch)=>{
    dispatch({type:types.Post_Add_Request})
    return axios.post(`http://localhost:3010/project/newpost`,data)
    .then((res)=>{dispatch({type:types.Post_Add_Success,payload:res.data})
        console.log(res)

    })
    .catch((err)=>{dispatch({type:types.Post_Add_Failure})
        console.log(err)
    })
    
}

// const deleteadd=(id)=>(dispatch)=>{
//     dispatch({type:types.Delete_Add_Request})
//     return axios.delete(`https://shift-raven.cyclic.app/addcart/delete/${id}`,{
//         headers:{
//             "Authorization":`Bearer ${localStorage.getItem("token_key")}`
//         }
//     })
//     .then((res)=>{dispatch({type:types.Delete_Add_Success,payload:res.data})
//     console.log(res)
//     })
//     .catch((err)=>{dispatch({type:types.Delete_Add_Failure})
//         console.log(err)
//     })

// }


export { getadd,postadd}