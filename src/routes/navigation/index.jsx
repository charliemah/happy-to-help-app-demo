import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

import ToggleColorMode from '../../components/ToggleColorMode'

const title = 'Happy To Help'

const sections = [
  { title: 'Home', url: '/' },
  { title: 'Contribute', url: '#' },
  { title: 'Resources', url: '#' }
]

function Navigation({ mode, toggleColorMode }) {

  return (
    <Container maxWidth='xl' disableGutters>
      <Fragment>
        <AppBar
          position='static'
          color='default'
          elevation={0}
        >
          <Toolbar sx={{ flexWrap: 'wrap' }}>
            <Typography variant='subtitle1' align='left' color='inherit' noWrap sx={{ flexGrow: 1, fontFamily: 'Helvetica', fontWeight: 'bold' }}>
              {title.toUpperCase()}
            </Typography>
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            <nav>
              {sections.map((section) => (
                <Link
                  color='inherit'
                  underline='none'
                  noWrap
                  key={section.title}
                  variant='body2'
                  href={section.url}
                  sx={{ p: 1, fontFamily:'Helvetica', flexShrink: 0 }}
                >
                  {section.title}
                </Link>
              ))}
            </nav>
          </Toolbar>
        </AppBar>
        <Outlet />
      </Fragment>
    </Container>
  )
}

export default Navigation
