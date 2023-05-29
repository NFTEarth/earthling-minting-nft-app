import {
  Checkbox,
  Color,
  Select,
  Style,
  TextInput,
} from '@makeswift/runtime/controls'
import { ReactRuntime } from '@makeswift/runtime/react'
import { ChainId } from '@thirdweb-dev/react'

import { NFTDropCard } from '../../components'

ReactRuntime.registerComponent(NFTDropCard, {
  type: 'nft-drop',
  label: 'NFT Drop',
  props: {
    className: Style(),
    chainId: Select({
      label: 'Chain',
      options: Object.entries(ChainId)
        .filter(([key]) => Number.isInteger(parseInt(key, 10)))
        .map(([value, label]) => ({ label: label as string, value })),
      defaultValue: String(ChainId.Arbitrum),
    }),
    contractAddress: TextInput({
      label: 'Contract Address',
      defaultValue: '0x8778B7FD7e2480C6F9Ad1075Bd848B7Ce1b9d90C',
    }),
    showMedia: Checkbox({
      label: 'Show media',
      defaultValue: true,
    }),
    showDescription: Checkbox({
      label: 'Show description',
      defaultValue: true,
    }),
    showClaimed: Checkbox({ label: 'Show claimed', defaultValue: true }),
    buttonBgColor: Color({ label: 'Button bg', defaultValue: '#000000' }),
    buttonTextColor: Color({ label: 'Button text', defaultValue: '#FFFFFF' }),
  },
})
