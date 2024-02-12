import { format } from "date-fns";

const date = (createdAt) => {
  const createdAtDate = new Date(createdAt);
  const formattedDate = format(createdAtDate, "dd/MM/yyyy");
  return formattedDate;
};

export default date;
