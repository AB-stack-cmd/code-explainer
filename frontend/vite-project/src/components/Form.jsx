import { useActionState } from "react";
import { action } from "../actions/action";
import Codecopy from "./Copy";
import HandleGet from "./handleGet";


function Form() {
    const [state, formAction, isPending] = useActionState(action, null);

    return (   
        <div className="w-full max-w-4xl bg-white p-7 rounded-lg shadow-lg mx-auto mt-10">
             
            <form action={formAction}>
                
                {/* Language Dropdown */}
                <label htmlFor="language" className="mb-2 font-semibold block">
                    Select Language:
                </label>
                <select
                    name="language"
                    id="language"
                    className="border rounded-lg w-full p-2 mb-4"
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
                <label htmlFor="code" className="mb-2 font-semibold block">
                    Enter Code:
                </label>
                <textarea
                    name="code"
                    id="code"
                    placeholder="Paste your code here..."
                    className="border rounded-lg w-full p-3 h-48 mb-4"
                ></textarea>

                {/* Submit */}
                <button
                    disabled={isPending}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg block mx-auto">
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
    );
}

export default Form;
