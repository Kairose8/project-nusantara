import { useNavigate } from "react-router-dom";

export default function GetStarted() {
    const navigate = useNavigate();

    return(
        <>
            <button onClick={() => navigate('/ExplorePage')}
            class="ml-24 mt-8 text-white bg-myColor-500 font-serif hover:bg-myColor-600 focus:outline-none text-xl rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"> 
                Get Started
            </button>
        </>
    );
}
