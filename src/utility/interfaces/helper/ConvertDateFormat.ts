// utils/dateConverter.js
export const formatDate = (date:string, format:string = "toDDMMYYYY") => {
  if (!date) return null;

  // Check the input format and convert accordingly
  if (format === "toDDMMYYYY") {
    // Convert from yyyy-mm-dd to dd/mm/yyyy
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  } else if (format === "toYYYYMMDD") {
    // Convert from dd/mm/yyyy to yyyy-mm-dd
    const [day, month, year] = date.split("/");
    return `${year}-${month}-${day}`;
  } else {
    throw new Error(
      'Invalid format specified. Use "toDDMMYYYY" or "toYYYYMMDD".'
    );
  }
};
