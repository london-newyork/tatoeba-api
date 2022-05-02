import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import "tailwindcss/tailwind.css";
import { Header } from '../../../src/components/Header/Header';
import { SearchMainLayouts } from '../../../src/components/Layouts/SearchMainLayouts'

export default function Detail () {

  const router = useRouter()
  const { t_id, title, shortParaphrase, description } = router.query

  // const [ prevTitle, setPrevTitle ] = useState(title)
  // console.log(prevTitle) //undefined

  //useStateでtitleを管理したいがpropsで渡ってきたtitleにuseStateすると重複してしまいエラー
  //重複をしないでtitleを書き換えるには？

  // const isReady = router.isReady

  // if (!isReady) {
  //   return <Loading />
  // }

  // const posts: null | string[] = []

  // if (!posts) {
  //   router.push('/404')
  //   return null
  // }

  // useEffect(() => {
  //   return () => {
  //     setWords([...words,{
  //       t_id, title, shortParaphrase, description
  //     }])
  //   }
  // }, [words])

  // const handleChangeTitle = (e) => {

    // setEditTitle(editTitle=>[
    //   ...editTitle,
    //   e.target.value
    // ])
    console.log(title)

    // setWords((title)=> [
    //   ...title,
    //   e.target.value
    // ])

    // setPrevTitle((prevTitle)=>[
    //   ...prevTitle,
    //   e.target.value
    // ])

    //atomに登録しなおす
    // setWords([prevTitle])
    //   console.log(prevTitle);
    //[配列]に入っていて、初回登録時の文字 + 一文字ずつ配列の中に収まっている。
    //abcと登録してあったら、このページで'd'と打てば abcd、次に'e'と打てばabce
  // }
  // console.log(title)
  //初回登録時と同じ値abcになってしまう。
  //title自体が変更されない

  return (
      <>
      <Head>
        <title>Tatoeba 例え話 検索結果</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
       <SearchMainLayouts>
          <div>
            <div
            className='flex flex-col'
            >
               <small
               className="text-gray-400"
               >
                 検索結果
               </small>
               <div
               className='
               flex
               relative
               '
               >
                  <h1 className="
                  text-4xl
                  text-gray-700
                  pt-6
                  ">
                    <input
                    value={title}
                    // onChange={()=>handleChangeTitle}
                    />
                    をわかりやすく例えると...
                  </h1>
               </div>
            </div>
            <h2 className="pt-16 text-2xl text-gray-600">
              {shortParaphrase}
            </h2>
            <p className="
            pt-10
            text-md
            leading-loose
            text-gray-600">
              {description}
            </p>
            <div className='max-w-[600px] h-96 bg-gray-300 mx-auto'>
              <img />
              </div>
          </div>
        </SearchMainLayouts>
      </>
  )
};
