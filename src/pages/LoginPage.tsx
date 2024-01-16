import Grid from "@mui/material/Unstable_Grid2";
import BaseCard from "../components/base/BaseCard/BaseCard";
import LoginForm from "../components/forms/LoginForm";

function LoginPage() {
  return (
    <Grid container display="flex" justifyContent="center" alignItems="center">
      <Grid xs={3}>
        <BaseCard title="Inicio de sesión" content={<LoginForm />} />
      </Grid>
    </Grid>
  );
}

export default LoginPage;
