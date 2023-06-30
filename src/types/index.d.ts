/* eslint-disable @typescript-eslint/no-explicit-any */
export type Driver = {
  allowPersonalUse: boolean | undefined;
  allowYardMoves: boolean | undefined;
  exemptDriver: boolean | undefined;
  shortHaulException: boolean | undefined;
  unlimitedShippingDocuments: boolean | undefined;
  unlimitedTrailers: boolean | undefined;
  assignedVehicles: string[];
  cargoType: string;
  confirmPassword: string;
  password: string;
  country: string;
  driverId: string;
  email: string;
  firstName: string;
  lastName: string;
  homeTerminal: string;
  hosRule: string;
  licenseNumber: string;
  phone: string;
  region: string;
  restBreak: string;
  restart: string;
  username: string;
  status?: boolean;
  location?: string;
  driveTime?: string;
  shiftTime?: string;
  cycleTime?: string;
}

export type FormProps = {
  control: any;
  errors: any;
};

export type Vehicle = {
  vehicleUnit: string;
  make: string;
  model: string;
  year: string;
  vin: string;
  fuel: string;
  eld: string;
  trackerDevice: string;
  country: string;
  state: string;
  licenseNumber: string;
  id: string | number;
  status?: boolean
}

