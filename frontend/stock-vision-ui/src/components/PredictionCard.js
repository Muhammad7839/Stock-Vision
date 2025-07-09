function PredictionCard({ asset, prediction }) {
  return (
    <div className="card">
      <h2>Prediction for {asset}</h2>
      <p>{prediction}</p>
    </div>
  );
}

export default PredictionCard;
