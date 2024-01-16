import Grid from "@mui/material/Unstable_Grid2";
import BaseCard from "../components/base/BaseCard/BaseCard";
import RegisterForm from "../components/forms/RegisterForm";

function RegisterPage() {
  return (
    <Grid container display="flex" justifyContent="center" alignItems="center">
      <Grid xs={3}>
        <BaseCard title="Registrarse" content={<RegisterForm />} />
      </Grid>
    </Grid>
  );
}

export default RegisterPage;
