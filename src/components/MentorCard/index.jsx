import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import Grid from '@mui/material/Grid'
import CardActionArea from '@mui/material/CardActionArea'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const MentorCard = ({ mentor }) => {
const linkedinUrl = `https://www.linkedin.com/in/${mentor.linkedinUsername}`
const githubUrl = `https://github.com/${mentor.githubUsername}`
const avatarUrl = `https://avatars.githubusercontent.com/u/${mentor.avatarId}`

  return (
    <Grid item  xs={12} sm={6} md={4} key={mentor.id} sx={{ display: 'flex' }}>
      <CardActionArea component={RouterLink} to={linkedinUrl} target='_blank'>
        <Card
          style={{ height: 250 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flexGrow: 1
          }}
        >
          <CardHeader
            disableTypography
            avatar={
              <Avatar
                src={avatarUrl}
                sx={{ width: 45, height: 45 }}
              />
            }
            action={
              <IconButton color='primary' component={RouterLink} to={linkedinUrl} target='_blank'>
                <LinkedInIcon />
              </IconButton>
            }
            title={
              <Stack
                direction='column'
                alignItems='baseline'
              >
                <Stack
                  direction='row'
                  spacing={0.5}
                >
                  <Typography variant='h6' sx={{ fontFamily: 'Arial', fontWeight: 'bold', lineHeight: '24px' }} >
                    {mentor.name}
                  </Typography>
                  <LinkedInIcon component={RouterLink} to={linkedinUrl} target='_blank' />
                </Stack>
                <Typography variant='body2' sx={{ fontFamily: 'Helvetica', fontWeight: 'medium', lineHeight: '20px' }}  align='left'>
                  {mentor.title} <Box color='text.secondary' display='inline'>at</Box> {mentor.organization}
                </Typography>
              </Stack>
            }
          />
          <CardContent sx={{ ml: 8.5 }}>
            <Box
              sx={{
                p: 1
              }}
            >
              <Typography variant='body1' sx={{ fontFamily: 'Arial', fontWeight: 'medium', lineHeight: '24px' }} align='left'>
                <Box color='primary.main' sx={{ fontWeight: 'bold' }} display='inline'>
                  {mentor.focusArea[0]}
                </Box>
                {mentor.focusArea[1]}
              </Typography>
            </Box>
          </CardContent>
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            sx={(theme) => ({
              backgroundColor:
                theme.palette.mode === 'light' ? 'grey.100' : 'grey.800'
            })}              
          >
            <Stack
              direction='row'
              alignItems='center'
              sx={{ ml: 1 }}
            >
              <IconButton component={RouterLink} to={githubUrl} target='_blank'>
                <GitHubIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <Typography variant='subtitle2' color='text.secondary' component='div'>
                <Box color='text.primary' display='inline'>{mentor.githubFollowersCount}</Box> followers
              </Typography>
            </Stack>
            <Typography variant='body2' color='text.secondary' sx={{ mr: 2.5 }}>
              {mentor.timezone}
            </Typography>
          </Stack>
        </Card>
      </CardActionArea> 
    </Grid>
  )
}

export default MentorCard
