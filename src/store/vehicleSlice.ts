import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  IVehicleEntity,
  VehicleEntity,
} from "../modules/vehicle/domain/VehicleEntity";
import { AddVehicleEntity } from "../modules/vehicle/domain/AddVehicleEntity";
import createLocalStorageVehicleRepository from "../modules/vehicle/infrastructure/LocalStorageVehicleRepository";
import getAll from "../modules/vehicle/application/get-all/getAll";
import { openSnackbar } from "./snackbarSlice";
import { IVehicleDto } from "../modules/vehicle/domain/VehicleDto";

const repository = createLocalStorageVehicleRepository();

export const fetchAllVehicles = createAsyncThunk(
  "fetchAllVehicles",
  async (_, { dispatch }): Promise<IVehicleDto[]> => {
    try {
      const vehicles = await getAll(repository);
      return vehicles;
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

export const vehicleSlice = createSlice({
  name: "vehicle",

  initialState: {
    vehicles: [] as IVehicleEntity[],
    addVehicleForm: new AddVehicleEntity(),
    selectedVehicleToAdd: null as IVehicleEntity | null,
  },

  reducers: {
    setSelectedVehicleToAdd: (state, action) => {
      state.selectedVehicleToAdd =
        state.vehicles.find((vehicle) => vehicle.id === action.payload) ?? null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAllVehicles.fulfilled, (state, action) => {
      state.vehicles = action.payload.map((vehicleDto) =>
        new VehicleEntity().fromVehicleDto(vehicleDto)
      );
    });
  },
});

export const { setSelectedVehicleToAdd } = vehicleSlice.actions;

export default vehicleSlice.reducer;
