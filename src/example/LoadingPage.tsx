import React, { PropsWithChildren } from 'react'
import type { FC } from 'react'
import './style.css'
import { Card, Grid, ProgressIndicator, Typography } from '@ncr-design-system/react'
import * as Theme from '@ncr-design-system/theme-utils'

type LoadingPageProps = PropsWithChildren<{} & Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'className'>>

export const LoadingPage: FC<LoadingPageProps> = () => {
  const theme = Theme.generateColor({
    main: "#2C2B6C",
    type: 'dark'
  })

  return (
    <>
      <Grid container spacing={3} alignItems='center'>
        <Grid item xs={12}>
          <Typography variant='title3'>Finance Planning Plugin</Typography>
          <Typography>Complete your profile!</Typography>
        </Grid>

        <Grid item xs={8}>
          <Card style={{ backgroundColor: theme[30] }}>
            <Grid container alignItems='flex-end' justify='center'>
              <Grid item xs={12}>
                <Typography variant='headline' bold>
                  Consent Form
                </Typography>
                <ProgressIndicator percentage={100} variant='large' style={{ border: `1px solid ${theme[60]}` }} />
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={8}>
          <Card style={{ backgroundColor: theme[30] }}>
            <Grid container alignItems='flex-end' justify='center'>
              <Grid item xs={12}>
                <Typography variant='headline' bold>
                  Personal Info
                </Typography>
                <ProgressIndicator percentage={100} variant='large' style={{ border: `1px solid ${theme[60]}` }} />
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={8}>
          <Card style={{ backgroundColor: theme[50] }}>
            <Grid container alignItems='flex-end' justify='center'>
              <Grid item xs={12}>
                <Typography variant='headline' bold>
                  Add Documents
                </Typography>
                <ProgressIndicator percentage={25} variant='large' style={{ border: `1px solid ${theme[60]}` }} />
              </Grid>
            </Grid>
            <Typography variant='callout'>Still missing: Driver's License scan</Typography>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}
