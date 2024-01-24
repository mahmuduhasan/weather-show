function TempMinMax({ data, type }) {
  return (
    <div>
      <p className="font-semibold">
        <span>{type}</span> :{" "}
        <span className="capitalize">
          {Math.floor(((data - 32) * 5) / 9)}
          &deg;C
        </span>
      </p>
    </div>
  );
}

export default TempMinMax;
