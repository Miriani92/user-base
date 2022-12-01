export interface UserData {
  email: String;
  privateNumber: Number;
  name: String;
  lastName: String;
  birthData: Date;
  category: Category;
  status: Status;
}

export interface Category {
  name: String;
}

export interface Status {
  name: String;
}
