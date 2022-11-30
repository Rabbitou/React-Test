import "./post.css";

interface PostProps {
  id: number;
  title: string;
  body: string;
}

export default function Post({ id, title, body }: PostProps) {
  return (
    <div className="post-card">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
