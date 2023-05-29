import { Document } from "mongoose";

type QueryResponse = {
  data?: Document<any, any, any> | Document<any, any, any>[];
  code: string;
};

/**
 * Handles the response from the database
 * @param data - The data returned from the database, Array or Object
 * @param code - The code to be returned
 */
export const handleResponse = ({ data, code }: QueryResponse) => {
  if (Array.isArray(data)) {
    return { dataArray: data, code };
  } else {
    return { data, code };
  }
};
