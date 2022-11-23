import Post from "./Post";
import "./index.css";

const ListPage = ({ searchResults }) => {
  const results = searchResults
    .slice(0, 6)
    .map((post) => <Post key={post.id} post={post} />);

  const content = results?.length ? (
    results
  ) : (
    <article>
      <p>No posts match</p>
    </article>
  );

  return <div className="content">{content}</div>;
};

export default ListPage;
