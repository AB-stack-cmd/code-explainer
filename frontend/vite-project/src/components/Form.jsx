import { useActionState } from "react";
import { action } from "../actions/action";
import Codecopy from "./Copy";
import HandleGet from "./handleGet";
import SideBar from "./SideBar";
import SignUpPage from "../pages/Login";



function Form() {
    const [state, formAction, isPending] = useActionState(action, null);

    return (  
        <>
        {/* <button className="border rounded-md w-3px"onClick={<SignUpPage/>}>Login</button> */}
       
        <div className="p-15">
           
            <form action={formAction}>
                
                
                {/* Language Dropdown */}
                <label htmlFor="language" className="mb-2 bg-transparent text-amber-50 font-semibold block">
                    Select Language:
                </label>
                <select
                    name="language"
                    id="language"
                    className="border bg-gray-100 rounded-4xl w-full p-2 mb-4"
                >
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                    <option value="C++">C++</option>
                    <option value="C">C</option>
                    <option value="C#">C#</option>
                    <option value="PHP">PHP</option>
                    <option value="Go">Go</option>
                    <option value="Rust">Rust</option>
                    <option value="TypeScript">TypeScript</option>
                </select>

                {/* Code Textarea */}
                <label htmlFor="code" className="mb-2 font-semibold text-amber-50 block">
                    Enter Code:
                </label>
                
                <textarea
                    name="code"
                    id="code"
                    placeholder="Paste your code here..."
                    className=" overflow-hidden resize-none  bg-gray-100 shadow-inner rounded-4xl  w-full p-4 h-auto mb-4 "
                ></textarea>

                {/* Submit */}
                <button
                    disabled={isPending}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg block mx-auto overflow-auto">
                    {isPending ? "Explaining..." : "Explain Code"}
                </button>
                <input type="button" src="D:\.vscode\CODE-EXPLAINER\frontend\vite-project\src\copy-button-icon-design-visually-perfect-vector.jpg" alt="Copy" height={50} width={50} />
                 
            </form>
           

            {/* SUCCESS OUTPUT */}
            {state?.success === true && (
                <div className="mt-6 p-4 bg-gray-100 rounded-lg whitespace-pre-wrap">
                    <Codecopy text={state.data.explanation}/>
                    <h2 className="font-semibold mb-2">Explanation:</h2>
                     
                    {state.data.explanation}
                </div>
            )}

            {/* ERROR OUTPUT */}
            {state?.success === false && (
                <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg whitespace-pre-wrap">
                    <h2 className="font-semibold mb-2">Error:</h2>
                    {state.error}
                </div>
            )}
        </div>
        </>
        
    );
}

export default Form;
