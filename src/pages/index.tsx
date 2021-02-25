import { Link, IGetInitialProps, Helmet } from 'umi'
import styles from './index.less'

interface Props extends IGetInitialProps {
  title: string;
}

export default function IndexPage({ title }: Props) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <h1 className={styles.title}>Page index - {title}</h1>
      <Link to="/demo">demo 页面</Link>
    </div>
  )
}

IndexPage.getInitialProps = async () => {
  return Promise.resolve({
    title: 'Hello World'
  })
}
