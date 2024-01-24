function Frame({ data, time }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={`./icons/${data.Icon}.svg`} alt={data.IconPhrase} />
      <p className="font-semibold text-sm">
        <span className="uppercase">{time}</span> :{" "}
        <span className="capitalize">{data.IconPhrase}</span>
      </p>
    </div>
  );
}

export default Frame;
