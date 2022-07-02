import ProductList from 'containers/ProductList';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title> Next Shop </title>
      </Head>
      <ProductList />
    </div>
  );
}
