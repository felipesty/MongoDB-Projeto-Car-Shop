import IService from '../interfaces/IService';
import { IModel } from '../interfaces/IModel';
import CarZodSchema, { ICar } from '../interfaces/ICar';
import ErrorTypes from '../errors/catalog';

class CarService implements IService<ICar> {
  private _car: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._car = model;
  }

  async create(obj: unknown): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._car.create(parsed.data);
  }

  async read(): Promise<ICar[]> {
    return this._car.read();
  }

  async readOne(_id:string): Promise<ICar> {
    const result = await this._car.readOne(_id);
    if (!result) throw new Error(ErrorTypes.EntityNotFound);
    return result;
  }
}

export default CarService;
