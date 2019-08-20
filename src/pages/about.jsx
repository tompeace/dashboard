import React from 'react'
import { Tabs, Tab } from '@bigfinite/component-library'

export default function About() {
  return (
    <Tabs>
      <Tab title='About 1'>
        <h2>About 1</h2>
        <div>
          About page 1

          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Earum sunt doloribus saepe ipsum suscipit! Aspernatur at
          eligendi ab accusamus omnis aut unde dolor tempora praesentium
          dicta, officia velit voluptatibus modi.
        </div>
      </Tab>
      <Tab title='About 2'>
        <h2>About 2</h2>
        <div>
          About 2

          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </Tab>
      <Tab title='About 3'>
        <h2>About 3</h2>
        <div>
          About 3 

          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Earum sunt doloribus saepe ipsum suscipit! Aspernatur at
          eligendi ab accusamus omnis aut unde dolor tempora praesentium
          dicta, officia velit voluptatibus modi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Earum sunt doloribus saepe ipsum suscipit! Aspernatur at
          eligendi ab accusamus omnis aut unde dolor tempora praesentium
          dicta, officia velit voluptatibus modi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Earum sunt doloribus saepe ipsum suscipit! Aspernatur at
          eligendi ab accusamus omnis aut unde dolor tempora praesentium
          dicta, officia velit voluptatibus modi.
        </div>
      </Tab>
    </Tabs>
  )
}