import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import {
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core'
import DownArrow from '@material-ui/icons/ArrowDownward';

import { RouteDatum } from '../types'
import { useAppContext } from '../../../context/app'

import { Logo } from '../../Logo'
import { Section } from '../../Containers'
import { TitledCard, StatCard } from '../../Cards'

const useStyles = makeStyles(theme => ({
  root: {
    // paddingTop: theme.spacing(8),
    justifyContent: 'center',
    textAlign: 'center',
  },

  slantUpTop: {
    position: 'absolute',
    left: 0,
    top: '-50px',
    height: '50%',
    width: '100%',
    backgroundColor: 'white',
    transform: 'skewY(-2deg)',
    zIndex: -1,
  },
  
  slantDownTop: {
    position: 'absolute',
    left: 0,
    top: '-50px',
    height: '50%',
    width: '100%',
    backgroundColor: 'white',
    transform: 'skewY(2deg)',
    zIndex: -1,
  },
  
  slantDownBottom: {
    position: 'absolute',
    left: 0,
    bottom: '-50px',
    height: '50%',
    width: '100%',
    backgroundColor: 'white',
    transform: 'skewY(2deg)',
    zIndex: -1,
  },
  
  slantUpBottom: {
    position: 'absolute',
    left: 0,
    bottom: '-50px',
    height: '50%',
    width: '100%',
    backgroundColor: 'white',
    transform: 'skewY(-2deg)',
    zIndex: -1,
  },

  body: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
  },

  header: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    
    '& > .colored': {
      fontFamily: 'Montserrat',
      color: theme.palette.secondary.main,
      textShadow: '2px 2px 0 black',
    },
  },

  whiteHeader: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    color: 'white',

    '& > .colored': {
      fontFamily: 'Montserrat',
      color: theme.palette.primary.main,
      textShadow: '3px 3px 0 black',
    },
  },

  section1: {
    position: 'relative',
    backgroundColor: 'white',
    zIndex: 1,
    margin: theme.spacing(25, 0, 15, 0),
  },

  section2: {
    padding: theme.spacing(0, 0, 10, 0),
  },

  section3: {
    position: 'relative',
    backgroundColor: 'white',
    zIndex: 1,
    margin: theme.spacing(10, 0),
  },

  roadmapItem: {
    position: 'relative',
  },

  arrow: {
    color: theme.palette.secondary.main,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(1, 0),
  },

  bottomItem: {
    transform: 'translateY(0px)',
    transition: 'transform 0.2s ease',
    '&:hover': {
      cursor: 'pointer',
      transform: 'translateY(-10px)',
    },
  },
}))

const Home: React.FC = () => {
  const cl = useStyles()
  const { token } = useAppContext()
  
  return (
    <>
      <Section containerSize="lg" containerCl={cl.root}>
        <Grid item xs={12}>
          <Logo />
        </Grid>
      </Section>
      <Section sectionCl={cl.section1}>
        <div className={cl.slantDownTop} />
        <div className={cl.slantUpBottom} />
        
        <Grid item xs={12} md={6}>
          <StatCard title={`Your ${token.symbol} balance`}>
            {token.balance}
          </StatCard>
          {/* <Typography variant="h4" className={cl.header}>
            The <span className="colored">"what"</span>
          </Typography>
          <Typography variant="body1" className={cl.body}>
            {token.name} ecosystem is a new Defi platform that aims to generate passive income, without the consequential deflation that often occurs in similar projects. This is achieved through the anti-deflationary system that {token.name} is equipped with, along with the staking rewards provided with the native reward token, {token.symbol}.
            <br/>
            <br/>
            Through its synergistic mechanisms, the {token.name} ecosystem aims to create interchangeable parity with {token.symbol}, through which holders will generate profit.
          </Typography> */}
        </Grid>

        <Grid item xs={12} md={6}>
          <StatCard title={`${token.symbol} supply`}>
            {token.totalSupply}
          </StatCard>
          {/* <Typography variant="h4" className={cl.header}>
            The <span className="colored">"how"</span>
          </Typography>
          <Typography variant="body1" className={cl.body}>
            {token.name} holders will be able to stake or farm their tokens in pools with different lock-up periods. Although we will have a lock-up periods, stakers will still be able to withdraw their tokens at any time for a penalty fee, which will be paid to stakers and farmers.
            <br />
            <br />
            Another yield generating mechanism will come from deploying farming pools with different token pairs.
            This should continuously generate yields for stakers and farmers in a non-inflationary way. No additional {token.symbol} will be ever minted.
          </Typography> */}
        </Grid>
      </Section>
      <Section sectionCl={cl.section2}>
        <Grid item xs={12}>
          <Typography variant="h3" className={cl.whiteHeader}>
            Introducing: <span className="colored">wUSD</span>
          </Typography>
          <Typography variant="body1" className={cl.body} style={{color: 'white'}}>
            We have many initiatives planned outside the realm of traditional farming and staking. The first of these is our very own stablecoin: $wUSD.
            <br />
            <br />
            wUSD will be our first addition to the {token.name} ecosystem. Our staking and farming pools will also reward additional APY in the form of wUSD. Upon its release, wUSD will be constantly rebased to $1 USD.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} style={{display: 'flex'}}>
          <TitledCard title="Rebased">
            wUSD will be constantly rebased to $1 USD upon release. Any arbitrage profit as a result of the rebasing will be put into liquidity.
          </TitledCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <TitledCard title="Rewards">
            wUSD will be used to as an additional reward incentive for both staking and farming. Eventually we will offer a pool to farm wUSD outright.
          </TitledCard>
        </Grid>
      </Section>
      <Section sectionCl={cl.section3}>
        <div className={cl.slantDownTop} />
        <div className={cl.slantUpBottom} />
        <Grid item xs={12}>
          <Typography variant="h3" className={cl.header}>
            Roadmap
          </Typography>
          
          <Grid item xs={12} container justify="center">
            <Grid item xs={12} md={4} className={cl.roadmapItem}>
              <TitledCard title="December 1, 2020" variant={2}>
                - Launch website
                <br />
                - List {token.symbol} on Uniswap
                <br />
                - Release telegram channel
              </TitledCard>
            </Grid>
            
            <Grid item xs={12}>
              <DownArrow fontSize="large" className={cl.arrow}/>
            </Grid>

            <Grid item xs={12} md={4} className={cl.roadmapItem}>
              <TitledCard title="December 2, 2020" variant={2}>
                - Begin liquidity partnership
                <br />
                - Open up staking to holders
                <br />
              </TitledCard>
            </Grid>
            
            <Grid item xs={12}>
              <DownArrow fontSize="large" className={cl.arrow}/>
            </Grid>

            <Grid item xs={12} md={4} className={cl.roadmapItem}>
              <TitledCard title="December 3, 2020" variant={2}>
                - Begin marketing campaign
                <br />
                - Apply for Coingecko listing*
                <br />
                <br />
                <Typography variant="body2">*If eligible</Typography>
              </TitledCard>
            </Grid>
            
            <Grid item xs={12}>
              <DownArrow fontSize="large" className={cl.arrow}/>
            </Grid>

            <Grid item xs={12} md={4} className={cl.roadmapItem}>
              <TitledCard title="December 4, 2020" variant={2}>
                - Open first farming pool
              </TitledCard>
            </Grid>

          </Grid>
        </Grid>
      </Section>
      <Section>
        <Grid item xs={12} md={6} className={cl.bottomItem} onClick={() => window.open(token.links.uniswap.buy)}>
          <TitledCard title="Trade">
            Buy {token.symbol} on Uniswap
          </TitledCard>
        </Grid>
        <Grid item xs={12} md={6} className={cl.bottomItem} onClick={() => window.open(token.links.uniswap.liquidity)}>
          <TitledCard title="Add Liquidity">
            Add to the liquidity pool
          </TitledCard>
        </Grid>
        <Grid item xs={12} md={6} className={cl.bottomItem} onClick={() => window.open(token.links.unicrypt)}>
          <TitledCard title="Liquidity Lock">
            See proof of our locked liquidity
          </TitledCard>
        </Grid>
        <Grid item xs={12} md={6} className={cl.bottomItem} onClick={() => window.open(token.links.contract)}>
          <TitledCard title="Contract">
            Check out the contract on etherscan
          </TitledCard>
        </Grid>
      </Section>
    </>
  )
}

export const HomeRouteDatum: RouteDatum = {
  path: '/',
  navName: 'Home',
  component: Home,
  icon: HomeIcon,
}