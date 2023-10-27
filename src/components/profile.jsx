import { useAuthState, useDbData } from "../utilities/firebase"

export const useProfile = () => {
  const [user] = useAuthState();
  const [isAdmin, isLoading, error] =  useDbData(`/admins/${user?.uid || 'guest'}`);
  return [{ user, isAdmin }, isLoading, error];
};