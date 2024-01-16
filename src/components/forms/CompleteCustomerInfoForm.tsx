import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setCustomer, updateCustomerData } from "../../store/customerSlice";
import { AppDispatch } from "../../main";

function CompleteCustomerInfoForm() {
  const customer = useSelector((state: RootState) => state.customer.customer);
  const dispatch: AppDispatch = useDispatch();

  return (
    <Grid container spacing={4} display="flex" justifyContent="center">
      <Grid xs={12}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Trato</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="sr"
            value={customer.formalTitle}
            name="radio-buttons-group"
            onChange={(event) =>
              dispatch(
                setCustomer({
                  ...customer,
                  formalTitle: event.target.value,
                })
              )
            }
          >
            <FormControlLabel value="sr" control={<Radio />} label="Sr." />
            <FormControlLabel value="sra" control={<Radio />} label="Sra." />
            <FormControlLabel
              value="srita"
              control={<Radio />}
              label="Srita."
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid xs={12}>
        <TextField
          label="Nombre"
          value={customer.name}
          fullWidth
          onChange={(event) =>
            dispatch(
              setCustomer({
                ...customer,
                name: event.target.value,
              })
            )
          }
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          label="Apellidos"
          value={customer.lastName}
          fullWidth
          onChange={(event) =>
            dispatch(
              setCustomer({
                ...customer,
                lastName: event.target.value,
              })
            )
          }
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          label="Correo electrónico"
          value={customer.email}
          fullWidth
          onChange={(event) =>
            dispatch(
              setCustomer({
                ...customer,
                email: event.target.value,
              })
            )
          }
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          label="Teléfono fijo"
          value={customer.phone}
          fullWidth
          onChange={(event) =>
            dispatch(
              setCustomer({
                ...customer,
                phone: event.target.value,
              })
            )
          }
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          label="Teléfono móvil"
          value={customer.mobilePhone}
          fullWidth
          onChange={(event) =>
            dispatch(
              setCustomer({
                ...customer,
                mobilePhone: event.target.value,
              })
            )
          }
        />
      </Grid>
      <Grid xs={12}>
        <FormControl fullWidth>
          <InputLabel id="state">Estado</InputLabel>
          <Select
            labelId="state"
            value={customer.state}
            label="Estado"
            onChange={(event) =>
              dispatch(
                setCustomer({
                  ...customer,
                  state: event.target.value,
                })
              )
            }
          >
            <MenuItem value={"Puebla"}>Puebla</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid xs={12}>
        <FormControl fullWidth>
          <InputLabel id="city">Municipio</InputLabel>
          <Select
            labelId="city"
            label="Municipio"
            value={customer.city}
            fullWidth
            onChange={(event) =>
              dispatch(
                setCustomer({
                  ...customer,
                  city: event.target.value,
                })
              )
            }
          >
            <MenuItem value={"Cholula"}>Cholula</MenuItem>
            <MenuItem value={"Puebla"}>Puebla</MenuItem>
            <MenuItem value={"Cuautlancingo"}>Cuautlancingo</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid xs={6}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => dispatch(updateCustomerData(customer))}
        >
          Guardar
        </Button>
      </Grid>
    </Grid>
  );
}

export default CompleteCustomerInfoForm;
