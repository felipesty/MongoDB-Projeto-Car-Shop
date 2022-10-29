import { ICar } from '../../interfaces/ICar';

const carMock: ICar = {
  model: 'BMW',
  year: 2020,
  color: 'black',
  buyValue: 300000,
  doorsQty: 4,
  seatsQty: 5,
}

const carMockId: ICar & {_id: string}= {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'BMW',
  year: 2020,
  color: 'black',
  buyValue: 300000,
  doorsQty: 4,
  seatsQty: 5,
}

export { carMock, carMockId };
