export interface UserData {
  name: String;
  lastName: String;
  email: String;
  privateNumber: Number;
  birthDate: DataView;
  category?: Category;
  status?: Status;
}

export interface Category {
  name: String;
}

export interface Status {
  name: String;
}
