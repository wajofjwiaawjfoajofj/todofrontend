import React from 'react'
import './About.css'


const About = () => {
  return (
    <>
    <div className='AboutWrapper'>
      <h2>このアプリについて</h2>
      <p>サポーターズのマンスリーハッカソンで作成したエンジニアを目指す学生向けのTodoアプリ。フロントエンド側のみNetlifyでデプロイしてみました。（バックエンド側のデプロイが上手くいかないため、本番環境ではダミーデータを使用しています）
        ↑Node.js(Express.js)で代用してみることも検討中</p>
        <h2>なぜ作ったのか</h2>
        <p>webエンジニアを目指している私や友人の共通の悩みとして、就活や個人開発に向けてやらなければならないことが多く,
          上記の問題を解決するためにそれをうまく可視化できるようなアプリを作ってみたいと考え作成した
        </p>
      <h2>使用技術</h2>
      <h4>フロントエンド側</h4>
      <ul>
        <li>React</li>
        <li>MUI</li>
        <li>Axios</li>
      </ul>
      <h4>バックエンド側</h4>
      <ul>
        <li>Reby on Rails(APIモード)</li>
        <li>Docker</li>
        <li>MySQL</li>
      </ul>
      <h2>このアプリの機能</h2>
    </div>
    </>
  )
}

export default About