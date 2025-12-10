export default function SideBar(){
    return (
        <>
        <nav>
            <ul>
                <li>
                    <a href="Form">
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <button id="dropdown-btn" className="bg-black">.</button>
                    <ul>
                        New Chat 
                    </ul>
                </li>
            </ul>
        </nav>
        <p></p>
        </>
       
    )
}