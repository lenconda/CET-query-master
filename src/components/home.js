import React from 'react';

import logo from '../assets/logo.png';
import zkzIcon from '../assets/home-zkzh-icon.png';
import nameIcon from '../assets/home-name-icon.png';
import codeIcon from '../assets/home-code-icon.png'
import code from '../assets/code.png'

import Miracle from 'incu-webview'


import { Input, CodeInput } from './input';
import './components.css';

//incu-webview
const isApp = Miracle.isApp();
console.log(isApp);

// get info of student
const onAppReady = Miracle.onAppReady(() => {
  const res = Miracle.getData();
  const info = res.user.profile.entireProfile.base_info;
  console.log("=======================")
  console.log("学号:"+info.xh)
  console.log("姓名:"+info.xm)
})



export class Home extends React.Component {
  render() {
    return (
      <div className="home-box" >
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="home-input-box">
          <Input icon={zkzIcon} placeholder="输入准考证号" />
          <Input icon={nameIcon} placeholder="输入姓名" />
          <CodeInput icon={codeIcon} code={code} />
        </div>
        <div className="home-btn-box">
          <button className='home-btn-query' >
            <span>查询成绩</span>
          </button>
          <button className='home-btn-toFind' >
            <span>找回准考证号</span>
          </button>
        </div>
      </div>
    )
  }
}