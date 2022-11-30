import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface UserType {
  email: string;
  password: string;
}

interface AuthType {
  user: UserType | null;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}

const authContext = createContext<AuthType>({
  user: null,
  signIn: () => null,
  signOut: () => null,
});

const userKey = "user";

export const useProvideAuth = () => {
  const [user, setUser] = useState<UserType | null>(null);
  useEffect(() => {
    const localUser = localStorage.getItem(userKey);
    if (localUser) {
      setUser(JSON.parse(localUser) as UserType);
    }
  }, []);

  const signIn = (email: string, password: string) => {
    localStorage.setItem(userKey, JSON.stringify({ email, password }));
    setUser({ email, password });
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem(userKey);
  };

  return { user, signIn, signOut };
};

export const useAuth = () => {
  return useContext(authContext);
};

export const ProvideAuth = (props: { children: ReactNode }) => {
  const { user, signIn, signOut } = useProvideAuth();
  return <authContext.Provider {...props} value={{ user, signIn, signOut }} />;
};
