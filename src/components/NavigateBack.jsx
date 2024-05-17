import { useNavigate } from "react-router-dom";

export default function NavigateBack() {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        class="mt-8 text-white bg-myColor-500 font-serif hover:bg-myColor-600 focus:outline-none text-xl rounded-full text-sm px-5 py-2.5  "
      >
        previous page 
      </button>
    </>
  );
}
