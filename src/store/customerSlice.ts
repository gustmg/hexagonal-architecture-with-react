import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  CustomerEntity,
  ICustomerEntity,
} from "../modules/customer/domain/CustomerEntity";
import { ICustomerLogin } from "../modules/customer/domain/CustomerLoginEntity";
import { ICustomerRegistrationEntity } from "../modules/customer/domain/CustomerRegistrationEntity";
import { IVehicleEntity } from "../modules/vehicle/domain/VehicleEntity";
import login from "../modules/customer/application/login/login";
import createLocalStorageCustomerRepository from "../modules/customer/infrastructure/LocalStorageCustomerRepository";
import {
  CustomerDto,
  ICustomerDto,
} from "../modules/customer/domain/CustomerDto";
import { openSnackbar } from "./snackbarSlice";
import register from "../modules/customer/application/register/register";
import { CustomerRegistrationDto } from "../modules/customer/domain/CustomerRegistrationDto";
import { router } from "../main";
import updateCustomer from "../modules/customer/application/update-customer/updateCustomer";
import { VehicleDto } from "../modules/vehicle/domain/VehicleDto";
import addVehicle from "../modules/customer/application/add-vehicle/addVehicle";

const repository = createLocalStorageCustomerRepository();

const defaultCustomerLoginForm = {
  email: "gus@gus.com",
  password: "123",
};

const defaultCustomerRegistrationForm = {
  name: "",
  lastName: "",
  email: "",
  password: "",
};

export const loginCustomer = createAsyncThunk(
  "loginCustomer",
  async (form: ICustomerLogin, { dispatch }): Promise<ICustomerDto> => {
    try {
      const customer = await login(repository, form);

      dispatch(
        openSnackbar({
          type: "success",
          text: "Inicio de sesión realizado correctamente! 🎉",
          isOpen: true,
        })
      );

      return customer;
    } catch (error) {
      dispatch(
        openSnackbar({
          type: "error",
          text: "Ocurrió un error al intentar iniciar sesión",
          isOpen: true,
        })
      );

      throw error;
    }
  }
);

export const registerCustomer = createAsyncThunk(
  "registerCustomer",
  async (form: ICustomerRegistrationEntity, { dispatch }): Promise<void> => {
    try {
      const payload =
        new CustomerRegistrationDto().fromCustomerRegistrationEntity(form);

      await register(repository, payload);

      dispatch(
        openSnackbar({
          type: "success",
          text: "Registro realizado correctamente! 🎉",
          isOpen: true,
        })
      );
    } catch (error) {
      dispatch(
        openSnackbar({
          type: "error",
          text: "Ocurrió un error al intentar registrarse.",
          isOpen: true,
        })
      );

      throw error;
    }
  }
);

export const updateCustomerData = createAsyncThunk(
  "updateCustomerData",
  async (customer: ICustomerEntity, { dispatch }): Promise<void> => {
    try {
      const payload = new CustomerDto().fromCustomerEntity(customer);
      await updateCustomer(repository, payload);

      dispatch(
        openSnackbar({
          type: "success",
          text: "Datos actualizados correctamente!",
          isOpen: true,
        })
      );
    } catch (error) {
      dispatch(
        openSnackbar({
          type: "error",
          text: "Ocurrió un error al intentar actualizar los datos.",
          isOpen: true,
        })
      );

      throw error;
    }
  }
);

export const addCustomerVehicle = createAsyncThunk(
  "addCustomerVehicle",
  async (vehicle: IVehicleEntity | null, { dispatch }): Promise<void> => {
    try {
      if (vehicle) {
        const payload = new VehicleDto().fromVehicleEntity(vehicle);
        await addVehicle(repository, payload);

        dispatch(
          openSnackbar({
            type: "success",
            text: "Vehiculo agregado correctamente!",
            isOpen: true,
          })
        );
      } else {
        throw new Error("No se ha seleccionado un vehículo para agregar");
      }
    } catch (error) {
      dispatch(
        openSnackbar({
          type: "error",
          text: "Ocurrió un error al intentar agregar el vehiculo.",
          isOpen: true,
        })
      );

      throw error;
    }
  }
);

export const customerSlice = createSlice({
  name: "customer",

  initialState: {
    customer: new CustomerEntity(),
    customerLoginForm: defaultCustomerLoginForm as ICustomerLogin,
    customerRegistrationForm:
      defaultCustomerRegistrationForm as ICustomerRegistrationEntity,
    customerVehicles: [] as IVehicleEntity[],
  },

  reducers: {
    setCustomer: (state, action) => {
      state.customer = { ...action.payload };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loginCustomer.fulfilled, (state, action) => {
      state.customer = new CustomerEntity().fromCustomerDto(action.payload);
      router.navigate("/home");
    });
  },
});

export const { setCustomer } = customerSlice.actions;

export default customerSlice.reducer;
