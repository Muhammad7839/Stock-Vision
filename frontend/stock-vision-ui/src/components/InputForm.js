import React, { useState } from "react";

function InputForm() {
  const [formData, setFormData] = useState({
    revenue: "",
    profit: "",
    eps: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted values:\nRevenue: ${formData.revenue}\nProfit: ${formData.profit}\nEPS: ${formData.eps}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Revenue ($M):</label>
      <input
        type="number"
        name="revenue"
        value={formData.revenue}
        onChange={handleChange}
        placeholder="Enter revenue"
      />

      <label>Profit ($M):</label>
      <input
        type="number"
        name="profit"
        value={formData.profit}
        onChange={handleChange}
        placeholder="Enter profit"
      />

      <label>Earnings Per Share (EPS):</label>
      <input
        type="number"
        name="eps"
        value={formData.eps}
        onChange={handleChange}
        placeholder="Enter EPS"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default InputForm;
