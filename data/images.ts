import type { Image } from '~/types'

export const images: Image[] = [
  {
    url: 'https://images.unsplash.com/photo-1740021778104-6d4abe5808cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quasi voluptatibus nam ad aliquid suscipit unde repellat omnis quidem voluptates. Accusamus, quam laborum.',
  },
  {
    url: 'https://images.unsplash.com/photo-1734639430017-5756ea7fec63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quasi voluptatibus nam ad aliquid suscipit unde repellat omnis quidem voluptates. Accusamus, quam laborum.',
  },
  {
    url: 'https://images.unsplash.com/photo-1739932901236-fe24da7099c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3N3x8fGVufDB8fHx8fA%3D%3D',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quasi voluptatibus nam ad aliquid suscipit unde repellat omnis quidem voluptates. Accusamus, quam laborum.',
  },
]

export const randomImagesSet1 = images
  .sort(() => Math.random() - 0.5)
  .concat(images.sort(() => Math.random() - 0.5))
  .concat(images.sort(() => Math.random() - 0.5))

export const randomImagesSet2 = images
  .sort(() => Math.random() - 0.5)
  .concat(images.sort(() => Math.random() - 0.5))
  .concat(images.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5)
