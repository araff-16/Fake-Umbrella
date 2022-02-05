import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
  company: { type: String, required: true },
  contact: { type: String, required: true },
  telephone: { type: String, required: true },
  city: { type: String, required: true },
  province: { type: String, required: true },
  country: { type: String, required: true },
  address: { type: String, required: true },
  postal: { type: String, required: true },
  employees: { type: Number, required: true },
});

export interface Customer {
  company: string;
  contact: string;
  telephone: string;
  city: string;
  province: string;
  country: string;
  address: string;
  postal: string;
  employees: number;
}
