import { useState } from "react";

function GitHubUserSearch() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUser = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setError("");
    setUser(null);
    setRepos([]);
    setLoading(true);

    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);

      if (!userRes.ok) {
        throw new Error("User not found");
      }

      const userData = await userRes.json();
      setUser(userData);

      const repoRes = await fetch(
        `https://api.github.com/users/${username}/repos?sort=created&per_page=5`,
      );
      const repoData = await repoRes.json();
      setRepos(repoData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-white rounded-lg flex flex-col items-center px-8 py-6 gap-4 border-4 border-sky-300 w-112.5">
        <h2 className="text-3xl font-extrabold tracking-tight">
          GitHub Search
        </h2>

        <form onSubmit={fetchUser} className="w-full flex gap-2">
          <input
            type="text"
            placeholder="GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:border-sky-400"
          />
          <button
            type="submit"
            className="bg-sky-300/80 px-4 py-2 rounded-lg text-sm font-extrabold text-gray-950 cursor-pointer hover:scale-110 transition transform"
          >
            Search
          </button>
        </form>

        {loading && (
          <p className="text-gray-700 font-bold italic">Loading...</p>
        )}

        {error && <p className="text-red-600 font-bold italic">{error}</p>}

        {user && (
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex items-center justify-between gap-10">
              <img
                src={user.avatar_url}
                alt="avatar"
                className="size-22 rounded-full border-2 border-sky-300"
              />
              <div>
                <h3 className="text-lg font-extrabold">
                  {user.name || user.login}
                </h3>
                {user.bio && (
                  <p className="text-gray-700 italic text-sm">{user.bio}</p>
                )}
                <p className="text-sm font-bold">Followers: {user.followers}</p>
              </div>
            </div>

            {repos.length > 0 && (
              <div className="w-full mt-3">
                <h4 className="font-extrabold mt-2 mb-1">
                  Latest Repositories
                </h4>
                <ul className="text-sm text-gray-800 font-bold">
                  {repos.map((repo) => (
                    <li key={repo.id} className="border-b border-gray-200 py-1">
                      {repo.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default GitHubUserSearch;
