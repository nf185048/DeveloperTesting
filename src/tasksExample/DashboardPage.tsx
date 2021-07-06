// https://dribbble.com/shots/15734007-Admin-Dashboard
import React from 'react'
import type { FC } from 'react'
import './style.css'
import { Button, Card, Grid, Item, Label, List, ProgressIndicator, Toggle, Typography } from '@ncr-design-system/react'
import * as Theme from '@ncr-design-system/theme-utils'
import { ChevronForward } from '../assets'

export const DashboardPage: FC<{}> = () => {
  const theme = Theme.generateColor({
    main: "#3C4CE4",
    type: 'light'
  })

  return (
    <>
      <Grid container style={{ color: theme[90] }}>
        <Grid item style={{ padding: '1em 0' }}>
          <Typography variant='largeTitle'>NCR | My Wallet</Typography>
          <Typography variant='body'>Finance Dashboard</Typography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Card style={{ padding: '1em' }}>
              <Typography variant='title3'>Savings</Typography>
              <Typography variant='largeTitle'>$12,438</Typography>
              <Grid style={{ paddingTop: "2em" }}>
                <Button variant='outline'>Check smart savings →</Button>
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card style={{ padding: '1em' }}>
              <Typography variant='title3'>Budgeting</Typography>
              <Typography variant='largeTitle' >$2420 / $3500</Typography>
              <Grid style={{ paddingTop: "1em" }}>
                <ProgressIndicator percentage={70} />
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card style={{ padding: '1em' }}>
              <Typography variant='title3'>Investment</Typography>
              <Typography variant='largeTitle'>$5,440</Typography>
              <Grid container alignItems='center'>
                <Label position='stacked'>Auto-Invest</Label>
                <Toggle></Toggle>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Card>
              <Grid container>
                <Grid item xs={3}>
                  <Typography bold variant='title3'>Lastest investments </Typography>
                </Grid>
                <Grid item xs={12}>
                  <List>
                    <Item style={{ padding: '1em 0', borderBottom: `1px solid ${theme[5]}` }}>
                      <Grid container>
                        <Grid item xs={10}>
                          <Typography variant='body'>Google</Typography>
                          <Typography variant='title3'>$500</Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Button variant='outline'>
                            <ChevronForward />
                          </Button>
                        </Grid>
                      </Grid>
                    </Item>
                    <Item style={{ padding: '1em 0', borderBottom: `1px solid ${theme[5]}` }}>
                      <Grid container>
                        <Grid item xs={10}>
                          <Typography variant='body'>MailChimp</Typography>
                          <Typography variant='title3'>$250</Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Button variant='outline'>
                            <ChevronForward />
                          </Button>
                        </Grid>
                      </Grid>
                    </Item>
                    <Item style={{ padding: '1em 0' }}>
                      <Grid container>
                        <Grid item xs={10}>
                          <Typography variant='body'>Salesforce</Typography>
                          <Typography variant='title3'>$150</Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Button variant='outline'>
                            <ChevronForward />
                          </Button>
                        </Grid>
                      </Grid>
                    </Item>
                  </List>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card style={{ backgroundImage: `linear-gradient(to bottom right, ${theme[30]}, ${theme[5]})` }}>
              <Grid container alignItems='center'>
                <Grid item xs={12} style={{ padding: '2em' }}></Grid>
                <Grid item xs={11}>
                  <Typography italic variant='title3'>Open a deposit</Typography>
                  <Typography italic variant='title3'>Get your interest</Typography>
                </Grid>
                <Grid item xs={1}>
                  <ChevronForward />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
