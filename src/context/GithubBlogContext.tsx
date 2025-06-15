import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

interface GitHubUser {
  login: string;
  bio: string;
  followers: number;
  name: string;
  company: string;
  avatar_url: string;
}

interface GithubBlogValues {
  dataBlog: GitHubUser;
}

type GithubBlogContextProviderProps = {
  children: ReactNode;
};

const GithubBlogContext = createContext({} as GithubBlogValues);

export const GithubBlogContextProvider = ({
  children,
}: GithubBlogContextProviderProps) => {
  const [dataBlog, setDatablog] = useState({} as GitHubUser);

  const fetchData = () => {
    const username = 'pfrancaneto';
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setDatablog(data));
  };

  console.log(dataBlog);

  useEffect(() => {
    fetchData();
  }, []);

  const values = {
    dataBlog,
  };

  return (
    <GithubBlogContext.Provider value={values}>
      {children}
    </GithubBlogContext.Provider>
  );
};

export const useGithubBlog = () => {
  const context = useContext(GithubBlogContext);

  if (!context) {
    throw new Error(
      'useTransactions deve ser usado dentro de um GithubBlogProvider'
    );
  }

  return context;
};
