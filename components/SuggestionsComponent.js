function SuggestionsComponent({ suggestions, suggestionHandler }) {
  return (
    suggestions.length > 0 && (
      <div className="absolute mt-2 inset-x-0 px-6 py-3 overflow-y-auto bg-white border rounded-md max-h-72 shadow-xl">
        {suggestions.map((item, i) => (
          <div
            key={i}
            className="block py-1"
            onClick={() => suggestionHandler(item.name)}
          >
            <h3 className="font-medium text-gray-700  hover:underline">
              {item.name}
            </h3>
            <p className="mt-2 text-sm text-gray-500 ">02/04/2020</p>
          </div>
        ))}
      </div>
    )
  );
}

export default SuggestionsComponent;
