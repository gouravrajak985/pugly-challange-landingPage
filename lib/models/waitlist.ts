export interface WaitlistEntry {
  _id?: string;
  name: string;
  email: string;
  referralCode: string;
  createdAt: Date;
}

export interface WaitlistResponse {
  success: boolean;
  message: string;
  referralCode?: string;
}