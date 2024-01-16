import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import { Button, Divider, TextField } from "@mui/material";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Grid container spacing={4} display="flex" justifyContent="center">
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
        <Button variant="contained" fullWidth>
          Iniciar sesión
        </Button>
      </Grid>
      <Grid xs={12}>
        <Divider flexItem />
      </Grid>
      <Grid xs={6}>
        <Button variant="outlined" fullWidth>
          Registrarse
        </Button>
      </Grid>
    </Grid>
  );
}

export default LoginForm;
