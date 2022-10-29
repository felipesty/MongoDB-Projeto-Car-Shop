import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/CarModel';
import { Model } from 'mongoose';
import { carMock, carMockId } from '../../mocks/carMock';
const { expect } = chai;

describe('Car model', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockId);
    sinon.stub(Model, 'findOne').resolves(carMockId);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Create Car', () => {
    it('successfully created', async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockId);
    });
  })

  describe('searching a car', () => {
    it('successfully found', async () => {
      const carFound = await carModel.readOne('62cf1fc6498565d94eba52cd');
      expect(carFound).to.be.deep.equal(carMockId);
    });

    it('id not found', async () => {
      try {
        await carModel.readOne('abc')
      } catch (error: any) {
        expect(error.message).to.be.equal('InvalidMongoId');
      }
    });
  })

});