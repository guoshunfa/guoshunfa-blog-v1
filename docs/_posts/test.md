---
title: test
date: 2022-01-31 10:54:17
permalink: /pages/415e65/
sidebar: auto
categories:
  - 随笔
tags:
  - 
---
::: demo [react]
```js
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { message: 'Hello World' }
  }
  render () {
    return (
      <div className="box-react">
        React {this.state.message}
      </div>
    )
  }
}
App.__style__ = `
  .box-react { color: red; }   
`
```
:::