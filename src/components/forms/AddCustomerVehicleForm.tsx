import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setSelectedVehicleToAdd } from "../../store/vehicleSlice";
import { addCustomerVehicle } from "../../store/customerSlice";
import { AppDispatch } from "../../main";

function AddCustomerVehicleForm() {
  const vehicles = useSelector((state: RootState) => state.vehicle.vehicles);
  const selectedVehicle = useSelector(
    (state: RootState) => state.vehicle.selectedVehicleToAdd
  );
  const dispatch: AppDispatch = useDispatch();

  return (
    <Grid container spacing={4} display="flex" justifyContent="center">
      <Grid xs={12}>
        <FormControl fullWidth>
          <InputLabel id="vehicle">Vehículo</InputLabel>
          <Select
            labelId="vehicle"
            label="Vehículo"
            fullWidth
            defaultValue={""}
            onChange={(e) => dispatch(setSelectedVehicleToAdd(e.target.value))}
          >
            {vehicles.map((vehicle) => (
              <MenuItem key={vehicle.id} value={vehicle.id}>
                {vehicle.model}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid xs={12}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="He leído y acepto el Aviso de privacidad"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="He leído y acepto los términos y condiciones"
          />
        </FormGroup>
      </Grid>
      <Grid xs={12}>
        <Divider flexItem />
      </Grid>
      <Grid container xs={12}>
        <Grid container spacing={4} xs={12}>
          <Grid xs={6}>
            <Typography variant="subtitle1">Subtotal</Typography>
          </Grid>
          <Grid xs={6} display={"flex"} justifyContent={"end"}>
            <Typography variant="subtitle1">
              {selectedVehicle?.price}
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="subtitle1">IVA</Typography>
          </Grid>
          <Grid xs={6} display={"flex"} justifyContent={"end"}>
            <Typography variant="subtitle1">
              {selectedVehicle ? selectedVehicle.price * 0.16 : 0}
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="subtitle1">Total</Typography>
          </Grid>
          <Grid xs={6} display={"flex"} justifyContent={"end"}>
            <Typography variant="subtitle1">
              {selectedVehicle
                ? selectedVehicle.price * 0.16 + selectedVehicle.price
                : 0}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={6}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => dispatch(addCustomerVehicle(selectedVehicle))}
        >
          Agregar
        </Button>
      </Grid>
    </Grid>
  );
}

export default AddCustomerVehicleForm;
