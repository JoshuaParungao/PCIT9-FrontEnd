function PostList({ posts }) {
  if (!posts.length) {
    return <p className="no-posts">No posts yet 😄</p>;
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <h3>{post.author}</h3>
          <p>{post.content}</p>
          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt="Post"
              className="post-image"
            />
          )}
          <small>
            Created: {new Date(post.createdAt).toLocaleString()}
            {post.updatedAt && (
              <> | Updated: {new Date(post.updatedAt).toLocaleString()}</>
            )}
          </small>
        </div>
      ))}
    </div>
  );
}

export default PostList;
