import {useState} from 'react';

// text is the explanation json 
export default async function Codecopy({text}){
    const [copied , setcopied] = useState (false)
    
        const CopyToClipboard = async ()=>{ 
            if(!text) return;

            await navigator.clipboard.write(text);
                setcopied(true);// to show copied after the await is successfull

                setTimeout(() => {
                    setcopied(false)
                },1200);
            };

        return(
            <div>
                <button onClick={CopyToClipboard}>
                    {copied?"Copied":"Copy"}
                </button>
            </div>
        )

}
