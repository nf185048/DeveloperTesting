/**
 * TASK: Create a status page for a financial planning plugin.
 * 
 * Use the NCR Design System components to build a status page. I've
 * suggested some components to help you build the interface, but you are
 * welcome to use, or not use, any of these recommended components. The only
 * requirement is that you exclusively use the NCR Design System to build 
 * this front end challenge. Note some of the components listed as recommended
 * are required to build out the requested items, but not all. Add additional
 * features as desired.
 * 
 * Recommended components: Card, Grid, ProgressIndicator, Typography
 * 
 * REQUIRED: 
 * - Three cards illustrating three stages of financial planning:
 *    (1) Consent form card -> a progress indicator component at 100% progress 
 *        completion, at a darker background color to indicate completion
 *    (2) Personal info card -> a progress indicator component at 100% progress
 *        completion, at a darker background color to indicate completion
 *    (3) Documents card -> a progress indicator component at 25% progress 
 *        completion, at a lighter background color to indicate that continued 
 *        progress is required 
 * - Use the theme const below to generate a color scheme to create a dark 
 *   themed interface
 */

import React from 'react'
// import React, {useContext, useEffect} from 'react'
import type { FC } from 'react'
import './style.css'
import * as Theme from '@ncr-design-system/theme-utils'
import { Button, ProgressIndicator, Grid, Typography, Card } from '@ncr-design-system/react'

export const LoadingPage: FC<{}> = () => {
  /**
   * Example usage: 
   * <div style={{backgroundColor: `${theme[5]}`}}></div>
   */
  const theme = Theme.generateColor({
    main: "#3C4CE4", // customize this value as desired
    type: 'dark'
  })

  return (
    <Grid container direction='column'>

      <Typography
        noWrap
        variant="largeTitle"
        bold
        style={{ color: theme[90] }}
      >
        Prepare for Loan Advance
      </Typography>
      <div style={{ paddingTop: '1em' }} />
      <Card>
        <ProgressIndicator
          percentage={50}
          variant='large'
        ></ProgressIndicator>
      </Card>
      <div style={{ paddingTop: '1em' }} />
      <Button> Personal Info</Button>
      <div style={{ paddingTop: '1em' }} />
      <Button> Add Documents</Button>
      {/* Content */}
    </Grid>
  )
}
