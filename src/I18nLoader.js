import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ExecutionEnvironment from 'exenv'

export class I18nLoader extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  }
  // state = {
  //   loading: true,
  //   catalogs: new Map(),
  //   language: 'en',
  // }

  // loadLanguageClient = async language => {
  //   let catalogs
  //   if (ExecutionEnvironment.canUseDOM) {
  //     /* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
  //     catalogs = await import(`lingui-loader!../locale/${language}/messages.json`)
  //   } else {
  //     catalogs = await import(`../locale/${language}/messages.json`)
  //   }

  //   console.log(catalogs)
  //   this.setState(state => ({
  //     catalogs: {
  //       ...state.catalogs,
  //       [language]: catalogs,
  //     },
  //   }))
  // }

  // loadLanguageServer = async language => {
  //   let catalogs
  //   if (ExecutionEnvironment.canUseDOM) {
  //     /* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
  //     catalogs = await import(`lingui-loader!../locale/${language}/messages.json`)
  //   } else {
  //     catalogs = await import(`../locale/${language}/messages.json`)
  //   }

  //   console.log(catalogs)
  //   this.setState(state => ({
  //     catalogs: {
  //       ...state.catalogs,
  //       [language]: catalogs,
  //     },
  //   }))
  // }

  // loadLanguage = async (language, catalogs) => {
  //   this.setState(state => ({
  //     catalogs: {
  //       ...state.catalogs,
  //       [language]: catalogs,
  //     },
  //   }))
  // }

  // componentWillMount() {
  //   let { catalogs } = this.state
  //   if (catalogs.size == 0) {
  //     this.loadLanguage(this.state.language)
  //   }
  // }

  // componentDidMount() {
  //   let { catalogs } = this.state
  //   if (catalogs.size == 0) {
  //     this.loadLanguage(this.state.language)
  //   }
  // }

  render() {
    return (
      <div>
        {this.props.children({
          ...this.props,
        })}
      </div>
    )
  }
}
