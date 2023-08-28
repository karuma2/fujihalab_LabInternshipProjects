
import { Box, Button } from '@chakra-ui/react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { useMounted } from '../hooks/useMounted'
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Connect() {
  const isMounted = useMounted()

  const { disconnect } = useDisconnect()

  if (isMounted) {
    return null
  }
  return (

    <div >
      <ConnectButton />
    </div>
  )
}