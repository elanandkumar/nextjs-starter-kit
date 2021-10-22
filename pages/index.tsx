import { ChangeEvent, useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Layout from '../components/Layout';

const Home: NextPage = () => {
  const [postId, setPostId] = useState(1);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPostId(+event.target.value);
  }
  return (
    <Layout>
      <h1>Welcome to NextJS</h1>
      <input type="text" onChange={handleInputChange} value={postId} />
      <Link href={`/posts/${postId}`} passHref={true}>
        <button>Go to post {postId}</button>
      </Link>
    </Layout>
  );
};

export default Home;
