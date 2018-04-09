import React, { Component } from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import { I18nProvider } from '@lingui/react'
import { Home } from './Home'
import { About } from './About'

export class App extends Component {
  state = {
    language: 'en',
    catalogs: {},
  }

  loadLanguage = async language => {
    let catalogs
    if (ExecutionEnvironment.canUseDOM) {
      /* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
      catalogs = await import(`lingui-loader!../locale/${language}/messages.json`)
    } else {
      catalogs = await import(`../locale/${language}/messages.json`)
    }

    console.log(catalogs)
    this.setState(state => ({
      catalogs: {
        ...state.catalogs,
        [language]: catalogs,
      },
    }))
  }

  loadLanguageServerSide = async language => {
    let catalogs
    if (ExecutionEnvironment.canUseDOM) {
      /* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
      catalogs = await import(`lingui-loader!../locale/${language}/messages.json`)
    } else {
      catalogs = await import(`../locale/${language}/messages.json`)
    }

    console.log(catalogs)
  }

  componentWillMount() {
    if (ExecutionEnvironment.canUseDOM) {
      this.loadLanguage(this.state.language)
    } else {
      this.loadLanguageServerSide(this.state.language)
    }
  }

  componentDidMount() {
    // this.loadLanguage(this.state.language)
  }

  shouldComponentUpdate(nextProps, { language, catalogs }) {
    if (language !== this.state.language && !catalogs[language]) {
      this.loadLanguage(language)
      return false
    }

    return true
  }

  render() {
    const { language, catalogs, languageData } = this.state

    if (!catalogs[language]) return null

    return (
      <div>
        <I18nProvider
          language={language}
          catalogs={catalogs}
          languageData={languageData}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </I18nProvider>
      </div>
    )
  }
}
