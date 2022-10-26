interface IService<T> {
  create(obj:unknown):Promise<T>,
  read():Promise<T[]>,
  readOne(_id:string):Promise<T>,
  update(id:string, body:unknown): Promise<T>;
}

export default IService;
