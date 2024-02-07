import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      Not Found Page! Go <Link to="/">Home Page</Link>
    </div>
  );
}
