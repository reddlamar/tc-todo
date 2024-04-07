export type SignInProps = {
  email: string;
  onChangeEmail: (value: string) => void;
  password: string;
  onChangePassword: (value: string) => void;
  handleSignIn: (email: string, password: string) => void;
};

export type Task = {
  id?: number;
  userId: number;
  title: string;
  completed: boolean;
};
