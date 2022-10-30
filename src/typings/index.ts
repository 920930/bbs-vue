export interface IData {
  status: number;
  success: boolean;
  message: string;
}

export interface ICaptcha extends IData {
  data: string;
}