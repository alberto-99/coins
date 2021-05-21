import { TextField, FormLabel, Grid } from "@material-ui/core";

import React, { useEffect, useState } from "react";

const MainPage = () => {
  const [rangoPrecio, setRango] = useState(0);
  const [precio, setPrecio] = useState("");
  const [porcentaje, setPorcentaje] = useState("");

  const handleSetRango = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrecio(e.target.value);
  };

  const handleSetPorcentaje = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPorcentaje(e.target.value);
  };

  useEffect(() => {
    setRango(Number(precio) * (Number(porcentaje) / 100));
  }, [precio, porcentaje]);

  return (
    <div style={{ textAlign: "center" }}>
      <form noValidate autoComplete="off">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={4}>
            <TextField
              id="standard-basic"
              label="Precio"
              type="text"
              onChange={handleSetRango}
              value={precio}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="standard-basic"
              label="%"
              type="text"
              onChange={handleSetPorcentaje}
              value={porcentaje}
            />
          </Grid>
        </Grid>
      </form>
      <br />
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={4}>
          <label>
            {" "}
            Valor maximo usando {porcentaje}% : {Number(precio) + rangoPrecio}{" "}
          </label>
        </Grid>
        <br />
        <Grid item xs={4}>
          <label>
            {" "}
            Valor Minimo usando {porcentaje}% : {Number(precio) - rangoPrecio}{" "}
          </label>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainPage;
