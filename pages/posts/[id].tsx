import { useRouter } from 'next/router';
import styled from 'styled-components';
import Layout from '../../components/Layout';

export default function Posts() {
  const router = useRouter();
  const { id } = router.query;

  return <Layout>
      <Wrapper>{`Post ${id}`}</Wrapper>
    </Layout>;
};

const Wrapper = styled.div`
  background: red;
`;