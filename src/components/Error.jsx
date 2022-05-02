const Error = ({mensaje}) => {

  return (
    <div>
      <p className="bg-red-800 text-white w-full rounded-lg py-3 pr-4 mb-5 border-2 text-right uppercase">
        {mensaje}
      </p>
    </div>
  );
};

export default Error;
