import { z } from 'zod';

const VehicleZodSchema = z.object({
  model: z.string({
    required_error: 'model is required',
    invalid_type_error: 'model must be a string',
  }).min(3, { message: 'model must be 3 or more characters long' }),

  year: z.number({
    required_error: 'year is required',
    invalid_type_error: 'year must be a number',
  }).int().positive().gte(1900)
    .lte(2022),

  color: z.string({
    required_error: 'Color is required',
    invalid_type_error: 'Color must be a string',
  }).min(3, { message: 'color must be 3 or more characters long' }),

  status: z.boolean({
    invalid_type_error: 'status must be a boolean',
  }).optional(),

  buyValue: z.number({
    required_error: 'buyValue is required',
    invalid_type_error: 'buyValue must be a number',
  }).int(),
});

type IVehicle = z.infer<typeof VehicleZodSchema>;

export default VehicleZodSchema;
export { IVehicle };
