

function Tarea(props) {
  return (
    <div>
      <button
        key={props.id}
        onClick={() => props.delete(props.id)}
        type="button"
        className="grid grid-cols-2 w-96 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <p className={'col-span-2'}>{props.text}</p>
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={'w-6 h-6 col-start-3 col-span-3'}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      <br></br>
      </div>
  );
}
export default Tarea;
