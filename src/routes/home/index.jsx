import React, { Fragment } from 'react'
import { alpha } from '@mui/material'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import MentorCard from '../../components/MentorCard'

const titles = [ 'Happy To', 'Help', 'Ask Questions And Get Help From', 'Awesome OSS Mentors' ]

const subtitles = [
  'This is a curated list of awesome OSS mentors who are',
  'happy to help', 
  'newcomers with their first pull requests, inspired by',
  'the great experiment initiated by Lena in 2018',
  'https://github.com/lenadroid/awesome-oss-mentors',
  '.',
  'The information has been sourced from publicly available datasets (e.g. https://github.com/lenadroid/awesome-oss-mentors) intended for wide dissemination and use.'
]

function Home({ mentors }) {

  return (
    <Container maxWidth='xl' disableGutters>
      <Box
        sx={(theme) => ({
          backgroundImage:
            theme.palette.mode === 'light'
              ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
              : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat'
        })}
      >
        <Container
          id='hero'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 }
          }}
        >
          <Stack spacing={3} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
            <Typography
              variant='h1'
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignSelf: 'center',
                textAlign: 'center',
                color: 'text.primary',
                fontFamily: 'Arial',
                fontWeight: 'bold',
                fontSize: 'clamp(3.5rem, 10vw, 4rem)'
              }}
            >
              {titles[0]}&nbsp;
              <Typography
                component='span'
                variant='h1'
                sx={{
                  color: 'primary.main',
                  fontFamily: 'Arial',
                  fontWeight: 'bold',
                  fontSize: 'clamp(3rem, 10vw, 4rem)'
                }}
              >
                {titles[1]}
              </Typography>
            </Typography>
            <Typography
              textAlign='center'
              color='text.secondary'
              sx={{ alignSelf: 'center', fontFamily: 'Helvetica', fontWeight: 'medium', width: { sm: '100%', md: '80%' } }}
            >
              {subtitles[0]}&nbsp;
              <Box sx={{ fontWeight: 'bold' }} display='inline'>
                {subtitles[1]}&nbsp;
              </Box>
                {subtitles[2]}&nbsp;
              <Box color='primary.main' sx={{ fontWeight: 'bold' }} display='inline'>
                <Link
                  color='inherit'
                  underline='none'
                  href={subtitles[4]}
                  target='_blank'
                >
                  {subtitles[3]}
                </Link>                  
              </Box>
              {subtitles[5]}
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignSelf='center'
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
            >
              <TextField
                id='outlined-basic'
                hiddenLabel
                size='small'
                variant='outlined'
                aria-label='Enter your email address'
                placeholder='Your email address'
                inputProps={{
                  autocomplete: 'off',
                  ariaLabel: 'Enter your email address',
                }}
              />
              <Button variant='contained' color='primary'>
                Join Waitlist
              </Button>
            </Stack>
            <Typography variant='caption' textAlign='center' sx={{ opacity: 0.8 }}>
              By clicking &quot;Join Waitlist&quot; you agree to our&nbsp;
              <Link href='#' color='primary'>
                Terms & Conditions
              </Link>
              .
            </Typography>
          </Stack>
        </Container>
      </Box>
      <Box sx={{ bgcolor: 'background.default' }}>
        <Container
          id='mentors'
          sx={{
            pt: { xs: 4, sm: 12 },
            pb: { xs: 8, sm: 24 },
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 3, sm: 6 },
          }}
        >
          <Box
            sx={{
              width: { sm: '100%', md: '80%' },
              textAlign: { sm: 'left', md: 'center' },
            }}
          >
            <Typography component='h2' variant='h6' color='text.secondary'>
              {titles[2].toUpperCase()}
            </Typography>
            <Typography
              component='h2'
              variant='h3'
              sx={{
                color: 'primary.main',
                fontFamily: 'Arial',
                fontWeight: 'bold'
              }}
            >
              {titles[3]}
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              {subtitles[6]}
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {mentors.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </Grid>
          <Button variant='outlined'>
            Explore all
          </Button>
        </Container>
      </Box>         
    </Container>
  )
}

export default Home