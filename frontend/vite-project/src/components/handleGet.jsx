const HandleGet = async () =>{
    try{
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}api/explain-code`)
        const data = await res.json();

        if(!res.ok){
            return{
                success : false
            }
        }
        console.log(data.success)
        console.log(data.message)
        console.log(data.example)

        return data
    }catch(error){
        return{
            success : false,
            error : "Unable to fetch Json"
        }

    }
   
    
}

export default HandleGet;