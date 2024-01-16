import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import { Button, Divider, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { registerCustomer } from "../../store/customerSlice.ts";
import { AppDispatch } from "../../main.tsx";

function RegisterForm() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch: AppDispatch = useDispatch();

  return (
    <Grid container spacing={4} display="flex" justifyContent="center">
      <Grid xs={12}>
        <TextField
          label="Nombre"
          value={name}
          fullWidth
          onChange={(event) => setName(event.target.value)}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          label="Apellidos"
          value={lastname}
          fullWidth
          onChange={(event) => setLastname(event.target.value)}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          label="Correo electrónico"
          value={email}
          fullWidth
          onChange={(event) => setEmail(event.target.value)}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          label="Contraseña"
          value={password}
          type="password"
          fullWidth
          onChange={(event) => setPassword(event.target.value)}
        />
      </Grid>
      <Grid xs={6}>
        <Button
          variant="contained"
          fullWidth
          onClick={() =>
            dispatch(
              registerCustomer({ name, lastName: lastname, email, password })
            )
          }
        >
          Registrarse
        </Button>
      </Grid>
      <Grid xs={12}>
        <Divider flexItem />
      </Grid>
      <Grid xs={6}>
        <Button variant="outlined" fullWidth>
          Iniciar sesión
        </Button>
      </Grid>
    </Grid>
  );
}

export default RegisterForm;
