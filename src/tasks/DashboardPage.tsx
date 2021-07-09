/**
 * TASK: Create a simple dashboard to show investments.
 * 
 * Use the NCR Design System components to create a simple dashboard. I've
 * suggested some components to help you build the interface, but you are
 * welcome to use, or not use, any of these recommended components. The only
 * requirement is that you exclusively use the NCR Design System to build 
 * this front end challenge. Note some of the components listed as recommended
 * are required to build out the requested items, but not all. Add additional
 * features and styling as desired.
 * 
 * Recommended components: Button, Card, Grid, Input, InputWrapper, Item, 
 * Label, List, ProgressIndicator, Toggle, Typography
 * 
 * REQUIRED: 
 *  - 5 cards set up with a Grid (no usage of div tag in this test)
 *    (1) Savings card -> include a button that indicates that it navigates to 
 *        another page for savings
 *    (2) Budgeting card -> include a progress indicator to show how far along 
 *        the user is on their budgeting (eg. 45% through monthly budget)
 *    (3) Investment card -> include a toggle button for auto investment
 *    (4) Latest investments card -> create a list of three investments (eg. 
 *        Google, Mailchimp, Salesforce, etc.) that includes a navigation 
 *        button to see more info on each of the investments
 *    (5) Deposit card -> include an input to deposit money straight from the 
 *        interface, as well as a label on the input that indicates that the
 *        input is for depositing said money
 *  - Use the theme const below to generate a color scheme to create a light 
 *    themed interface
 */

import React from 'react'
import type { FC } from 'react'
import './style.css'
import * as Theme from '@ncr-design-system/theme-utils'
import { Button, Card, Grid } from '@ncr-design-system/react'

export const DashboardPage: FC<{}> = () => {
  /**
   * Example usage: 
   * <div style={{backgroundColor: `${theme[5]}`}}></div>
   */
  const theme = Theme.generateColor({
    main: "#3C4CE4", // customize this value as desired
    type: 'light'
  })

  return (
    <>
      {/* Content here */}
      <Grid container>
        <Grid item>
          <Card style={{ padding: '1em' }}>
            credit card
          </Card>
          <Button>
            nav to savings
          </Button>
        </Grid>
      </Grid>
    </>
  )
}
