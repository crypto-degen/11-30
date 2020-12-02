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
import { useWallet } from '../../../hooks/useWallet';

import LockIcon from '@material-ui/icons/Lock';

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
  const wallet = useWallet()
  
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
            {wallet.isConnected ? token.balance : <LockIcon style={{ fontSize: 64, marginTop: 12 }} />}
          </StatCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <StatCard title={`${token.symbol} supply`}>
            {token.totalSupply.toLocaleString()}
          </StatCard>
        </Grid>
      </Section>
      <Section sectionCl={cl.section2}>
        <Grid item xs={12}>
          <Typography variant="h3" className={cl.whiteHeader}>
            Introducing: <span className="colored">{token.symbol}</span>
          </Typography>
          <Typography variant="body1" className={cl.body} style={{color: 'white'}}>
            {token.name} is a decentralized finance (DeFi) project developed by an independent team of developers who seek to bring innovation to the emerging market. {token.symbol} provides superbly profitable services based on what the community desires; your voice helps steer the ship across the seas of decentralized finance.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} style={{display: 'flex'}}>
          <TitledCard title="Why">
            Rather than depending on a traditional hierarchy of staff and independent contributors, {token.name} run democratically and collectively as a group.
            <br />
            <br />
            A staking app, a voting app and a rewards app are the three main elements of the {token.name} ecosystem, with each app interconnecting and communicating with each other via theEthereum platform.
          </TitledCard>
        </Grid>
        <Grid item xs={12} md={4} style={{display: 'flex'}}>
          <TitledCard title="How">
            The community participates in {token.name} via {token.symbol} tokens. Those who stake {token.symbol} tokens will be given the right to vote on a plethora of different improvement proposals, ranging from strategic propositions to more complex and technically focused ideas.
            <br />
            <br />
            There will be no minimum amount that someone needs to stake in order to vote, meaning the barrier to entry is virtually zero. Your voting power is only limited by the number of {token.symbol} you own.
          </TitledCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <TitledCard title="Who">
            We are a team of developers passionate about bringing a fair and profitable application to the community.
            <br />
            <br />
            Currently we have chosen to remain anonymous, but eventually that may change.
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
                - Voting begins
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
                - Open first farming pool (voted on by the community)
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