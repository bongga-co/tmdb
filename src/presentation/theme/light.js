import general from './general'
import dims from './dims'

const primaryColor = '#0D0D5A'
const secondaryColor = '#50549e'

const LIGHT_THEME = Object.assign({}, general, {
  name: 'light',
  spinner: {
    color: primaryColor,
  },
  header: {
    height: dims.header,
    background: primaryColor,
    shadow: '0 0 10px #333',
    title: '#ffffff',
  },
  footer: {
    height: dims.footer,
    background: secondaryColor,
    title: '#ffffff',
  },
})

export default LIGHT_THEME
