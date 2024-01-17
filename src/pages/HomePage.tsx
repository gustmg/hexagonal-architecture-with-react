import Grid from "@mui/material/Unstable_Grid2";
import BaseCard from "../components/base/BaseCard/BaseCard";
import CompleteCustomerInfoForm from "../components/forms/CompleteCustomerInfoForm";
import { isCustomerWithCompleteData } from "../modules/customer/domain/CustomerEntity";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import AddCustomerVehicleForm from "../components/forms/AddCustomerVehicleForm";
import { useEffect } from "react";
import { fetchAllVehicles } from "../store/vehicleSlice";
import { AppDispatch } from "../main";
import { fetchCustomerVehicles } from "../store/customerSlice";
import CustomerVehiclesTable from "../components/cards/CustomerVehiclesTable";

function HomePage() {
  const customer = useSelector((state: RootState) => state.customer.customer);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllVehicles());
    dispatch(fetchCustomerVehicles());
  }, [dispatch]);

  return (
    <Grid
      container
      spacing={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid xs={3}>
        {isCustomerWithCompleteData(customer) ? (
          <BaseCard
            title="Elige tu vehículo"
            content={<AddCustomerVehicleForm />}
          />
        ) : (
          <BaseCard
            title="Complete su información"
            content={<CompleteCustomerInfoForm />}
          />
        )}
      </Grid>
      <Grid xs={9}>
        <BaseCard title="Vehículos" content={<CustomerVehiclesTable />} />
      </Grid>
    </Grid>
  );
}

export default HomePage;
