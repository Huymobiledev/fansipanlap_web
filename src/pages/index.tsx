import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import ViewHomePage from '@/views/home/viewHome'


type Props = {
  // Add custom props here
}

const Home: NextPage = () => {
  const router = useRouter()
  const { t } = useTranslation()

  return (
    <Fragment>
      <ViewHomePage/>
    </Fragment>
  )
}


export default Home
