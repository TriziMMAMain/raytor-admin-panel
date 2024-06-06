"use strict";

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// - Icon
import '@fortawesome/fontawesome-free/css/all.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'


// - MyTheme

const myCustomTheme = {
  dark: false,
  colors: {
    background: '#626461',
    surface: '#10100F',
    primary: '#4f80ea',
    primaryText: '#cacaca',
    text: '#666666',
    secondary: '#03DAC6',
    textSpan: '#1a1a1a',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

export const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme,
    }
  }
})
