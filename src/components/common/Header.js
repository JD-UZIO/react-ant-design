import React, { useState } from 'react'
import Link from 'antd/es/typography/Link';
import { Anchor, Button,Drawer } from 'antd';

const items=[
  {
    key: 'hero',
    href: '#hero',
    title: 'Home',
  },
  {
    key: 'about',
    href: '#about',
    title: 'About',
  },
  {
    key: 'feature',
    href: '#feature',
    title: 'Feature',
  },
  {
    key: 'works',
    href: '#works',
    title: 'How it works',
  },
  {
    key: 'faqs',
    href: '#faqs',
    title: 'FAQs',
  },
  {
    key: 'pricing',
    href: '#pricing',
    title: 'Pricing',
  },
  {
    key: 'contact',
    href: '#contact',
    title: 'Contact',
  },
]
function AppHeader() {

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className='container-fluid'>
    <div className='header'>
      <div className='logo'>
        <i className='fas fa-bolt'></i>
        <Link>TECH</Link>
        </div>
    
      <div className='mobileHidden'>
      <Anchor
        items={items}
      />
      </div>
      <div className='mobileVisible'>
      <Button type="primary" onClick={showDrawer}>
      <i className='fas fa-bars'></i>
      </Button>
      <Drawer onClose={onClose} open={open}>
      <Anchor
        items={items}
      />
      </Drawer>
      
      </div>
    </div>
    </div>
  )
}

export default AppHeader