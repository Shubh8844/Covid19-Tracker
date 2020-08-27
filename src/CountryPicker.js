import React from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import "./CountryPicker";

export default function CountryPicker({ countrylist, handleCountry }) {
  return (
    <div>
      <FormControl className="formcontrol">
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountry(e.target.value)}
        >
          <option value="">Global</option>
          {countrylist.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}
